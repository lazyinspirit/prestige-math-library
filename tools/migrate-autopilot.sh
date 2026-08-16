#!/bin/sh
# migrate-autopilot — fold the autopilot engine into this repository.
#
# WHY. The engine was built as a separate repo to keep it honestly
# domain-agnostic. That property does not come from the repo boundary — it comes
# from the engine knowing nothing about mathematics and the domain living in
# exactly one file, `stages/mathlib.mjs`. Moving the directory preserves that,
# and porting elsewhere becomes "copy tools/autopilot" rather than "clone a
# repo", which is simpler, not harder. The owner keeps one repository.
#
# WHEN. After a run reaches step 10, never during one. The running engine and
# its watchdog hold absolute paths in their command lines; move the tree
# underneath them and the watchdog restarts a binary that is no longer there.
# This script refuses to run while an engine is up.
#
# HISTORY. Uses `git subtree add`, which brings all of autopilot's commits into
# this repo's history under the new prefix. A plain copy would discard the
# record of why each fix exists, and several of those commit messages are the
# only place a defect's reasoning is written down.
#
#   sh tools/migrate-autopilot.sh [--source ~/Projects/autopilot] [--dry-run]

set -e

SOURCE="${AUTOPILOT_SOURCE:-$HOME/Projects/autopilot}"
PREFIX="tools/autopilot"
DRY=0
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    --source) shift; SOURCE="$1" ;;
  esac
done

REPO=$(git rev-parse --show-toplevel)
cd "$REPO"

say () { echo "  $*"; }
run () { if [ "$DRY" = "1" ]; then echo "  [dry-run] $*"; else eval "$@"; fi; }

echo "migrate-autopilot: $SOURCE -> $REPO/$PREFIX"

# ---- refuse to run against a live engine -----------------------------------
if pgrep -f "autopilot.mjs start" >/dev/null 2>&1; then
  echo "REFUSING: an autopilot engine is running."
  echo "  Moving the tree underneath it leaves the watchdog restarting a path that"
  echo "  no longer exists. Stop it first:  node $SOURCE/bin/autopilot.mjs stop"
  exit 1
fi
if pgrep -f "watchdog.sh" >/dev/null 2>&1; then
  echo "REFUSING: a watchdog is running; it would resurrect the engine mid-move."
  echo "  node $SOURCE/bin/autopilot.mjs stop   (writes the marker the watchdog honours)"
  exit 1
fi
say "no engine or watchdog running"

# ---- preconditions ----------------------------------------------------------
[ -d "$SOURCE/.git" ] || { echo "REFUSING: $SOURCE is not a git repository"; exit 1; }
[ -d "$PREFIX" ] && { echo "REFUSING: $PREFIX already exists"; exit 1; }
if [ -n "$(git status --porcelain | grep -v '^??')" ]; then
  echo "REFUSING: this repo has uncommitted tracked changes. Commit them first —"
  echo "  subtree add refuses a dirty tree, and a half-applied migration is worse"
  echo "  than none."
  exit 1
fi
say "preconditions clear"

SRC_BRANCH=$(git -C "$SOURCE" rev-parse --abbrev-ref HEAD)
SRC_COMMITS=$(git -C "$SOURCE" rev-list --count HEAD)
say "source branch $SRC_BRANCH, $SRC_COMMITS commit(s) of history to preserve"

# ---- the move ---------------------------------------------------------------
run "git subtree add --prefix=$PREFIX \"$SOURCE\" $SRC_BRANCH"

# ---- the one path that has to change ---------------------------------------
# The signature test defaults REPO to an absolute path. In-tree it is simply the
# repository two levels up, which is both correct and portable.
run "python3 - <<'PY'
import re
p = 'tools/autopilot/test/signatures.test.mts'
t = open(p).read()
old = \"const REPO = process.env.AUTOPILOT_TEST_REPO ?? '/Users/ianx/Projects/prestige-math-library';\"
new = (\"// In-tree: the repository is two levels up from this file. Was an absolute\\n\"
       \"// path when the engine lived in its own repo.\\n\"
       \"const REPO = process.env.AUTOPILOT_TEST_REPO\\n\"
       \"  ?? new URL('../../..', import.meta.url).pathname.replace(/\\\\/\\$/, '');\")
assert old in t, 'signature test default not found'
open(p, 'w').write(t.replace(old, new))
print('  repointed the signature test to the enclosing repo')
PY"

# ---- verify -----------------------------------------------------------------
if [ "$DRY" = "0" ]; then
  say "running the suite from its new home"
  ( cd "$PREFIX" && npm install --silent --no-audit --no-fund >/dev/null 2>&1; npx tsx --test "test/*.test.mts" 2>&1 | grep -E '^ℹ (tests|pass|fail)' | sed 's/^/    /' )
  say "checking the CLI resolves from the new path"
  npx tsx "$PREFIX/bin/autopilot.mts" frontier --categories topology 2>&1 | head -2 | sed 's/^/    /'
fi

cat <<EOF

Next, by hand:

  1. Restart the engine from its new home:
       node $PREFIX/bin/autopilot.mjs start --run <run> --detach
       nohup sh $PREFIX/bin/watchdog.sh "$REPO" > .autopilot/watchdog.log 2>&1 &

  2. Commit:
       git add -A && git commit -m "feat: fold the autopilot engine into this repo"

  3. The old repo at $SOURCE is now redundant. Its history is preserved here
     under $PREFIX. Keep it until you are satisfied, then remove it.
EOF
