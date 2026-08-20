#!/bin/sh
# watchdog — keep an autopilot run alive across crashes.
#
# WHY. The engine is a single long-lived process driving a build that runs for
# many hours, usually overnight with nobody watching. Any process can die: an
# unhandled rejection, an OOM, a laptop sleep that severs a child. If it dies at
# 03:00 the build simply stops, and the first anyone knows is in the morning.
#
# This is deliberately dumb. It does not judge, retry logic, or interpret state —
# `autopilot` owns all of that, and its state is durable, so a restart resumes
# rather than repeats. The watchdog only answers one question: is the engine
# running? If not, start it.
#
# It respects a stop: `autopilot stop` writes a marker, and the watchdog exits
# rather than resurrecting a run the owner ended. Without that, stopping would
# be impossible — the two would fight.
#
#   nohup sh bin/watchdog.sh <repo> > <repo>/.autopilot/watchdog.log 2>&1 &

REPO="${1:-$PWD}"
AUTOPILOT="$(cd "$(dirname "$0")" && pwd)/autopilot.mts"
# The engine is a .mts file, and `node autopilot.mts` only works on a node
# compiled with TypeScript support. This repo has no node_modules, so the
# supported way to run one of its .mts tools is `tools/tsx-run.mjs`, which
# resolves a loader at run time — the app checkout's tsx, else the repo's own
# hook against a global TypeScript. Launching plain `node` here meant that on a
# node without TS support the restart failed instantly, five times, and the
# watchdog gave up: the exact silent overnight death it exists to prevent.
RUNNER="$REPO/tools/tsx-run.mjs"
STATE="$REPO/.autopilot"
INTERVAL="${WATCHDOG_INTERVAL:-60}"
MAX_FAILS="${WATCHDOG_MAX_FAILS:-5}"
FAILS=0

mkdir -p "$STATE"
log () { echo "[$(date -u +%Y-%m-%dT%H:%M:%SZ)] $*"; }

log "watchdog started for $REPO, checking every ${INTERVAL}s"

while true; do
  if [ -f "$STATE/stopped" ]; then
    log "stop marker present; watchdog exiting without restarting"
    exit 0
  fi

  # Complete runs are not restarted. `status.md` is written by the engine and
  # says COMPLETE only when every stage has cleared.
  if [ -f "$STATE/status.md" ] && head -1 "$STATE/status.md" | grep -q COMPLETE; then
    log "run reports COMPLETE; watchdog exiting"
    exit 0
  fi

  # `comm` is the reliable field. Matching on args alone also matches this
  # script's own shell, which reads as "already running" forever.
  alive=$(ps -eo comm,args | awk '/autopilot\.mts start/ && $1 !~ /awk|sh$/' | wc -l | tr -d ' ')

  if [ "$alive" = "0" ]; then
    log "engine not running — starting it"
    ( cd "$REPO" && nohup node "$RUNNER" "$AUTOPILOT" start --repo "$REPO" >> "$STATE/autopilot.log" 2>&1 & )
    sleep 10
    again=$(ps -eo comm,args | awk '/autopilot\.mts start/ && $1 !~ /awk|sh$/' | wc -l | tr -d ' ')
    if [ "$again" = "0" ]; then
      FAILS=$((FAILS + 1))
      log "RESTART FAILED ($FAILS/$MAX_FAILS) — engine did not come up; see $STATE/autopilot.log"
      # An engine that cannot start will never start by being asked again. A bad
      # config or a syntax error would otherwise be retried every sixty seconds
      # until morning, filling the log and looking like activity.
      if [ "$FAILS" -ge "$MAX_FAILS" ]; then
        log "GIVING UP after $MAX_FAILS consecutive failures. The run is STOPPED."
        log "  Diagnose with: node $RUNNER $AUTOPILOT start --repo $REPO   (in the foreground)"
        exit 1
      fi
      # Back off so a failing engine does not spin: 60s, 120s, 240s, ...
      BACKOFF=$((INTERVAL * FAILS * 2))
      log "backing off ${BACKOFF}s before the next attempt"
      sleep "$BACKOFF"
    else
      log "engine restarted"
      FAILS=0
    fi
  fi

  sleep "$INTERVAL"
done
