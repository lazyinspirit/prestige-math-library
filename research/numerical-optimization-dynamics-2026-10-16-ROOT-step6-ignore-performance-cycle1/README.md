# First-cycle proposal: preserve ignore semantics without repeated index scans

Research only. No proposed code was executed or installed. No validators,
preflight, gates, tests, benchmarks or hash computations ran. Only proposal
assembly and read-only source/process/filename/index-header inspection ran.
The active root query was not controlled; root preserves its real diagnostic
and owns stopping it, installation, fresh bindings and the next native query.

## Confirmed cause

The real active child command was `git check-ignore -z --stdin`, with no
`GIT_LITERAL_PATHSPECS`, `GIT_GLOB_PATHSPECS`, `GIT_NOGLOB_PATHSPECS` or
`GIT_ICASE_PATHSPECS` override. Installed Git reports version 2.53.0.
Its original index header contains 372,782 entries, 77,780,504 bytes. The run's
physical research inventory has 234,707 files across 50,899 directories and
41,764,347 bytes of NUL-separated filenames. These physical counts include
ignored/operational files and are not claimed as the exact final selected input.

Git 2.53.0's [check-ignore source](https://github.com/git/git/blob/v2.53.0/builtin/check-ignore.c#L129)
calls `check_ignore` once per stdin filename. That invokes
`find_pathspecs_matching_against_index`; its
[pathspec implementation](https://github.com/git/git/blob/v2.53.0/pathspec.c#L32)
loops across every index entry for each call. Large selected inventories
therefore produce tens of billions of index-entry visits. This explains
sustained CPU work; the observation was not a timeout, deadlock or failed pass.

## Exact semantic fast path

Both production `check-ignore` callers are covered: `loadScope` and
`preflightStep6`. They already hold the genuine parsed index from `indexEntries`.
That parser already checks index raw-byte continuity, conflicts and submodules.
The proposal exposes its existing ending index digest/path as a nonenumerable
array property; serialized index evidence, ordering and default comparisons do
not change.

The shared helper fast path requires safe literal paths, no pathspec environment
override, case-sensitive/nonsparse effective configuration, and only ordinary
default-flag index entries. Any unusual state uses the original native command
unchanged. Thus sparse, skip-worktree, assume-unchanged, intent-to-add, case-fold
and pathspec interpretation are not guessed or silently overridden.

For the fast path, exact index pathname matches remain excluded from ignore
classification, as in ordinary Git. Literal parent paths with tracked descendants
are also excluded, matching Git's recursive literal pathspec rule in
[match_pathspec_item](https://github.com/git/git/blob/v2.53.0/dir.c#L439).
Binary searches over a locally sorted name array perform these exact comparisons;
no selected path is removed from closeout ownership or its other checks.
Every remaining exact original path receives genuine `check-ignore --no-index
-z --stdin` evaluation with the actual standard/global/local/directory ignore
configuration. This preserves the native tracked-file exception rather than
blindly applying `--no-index` to tracked files.

The fallback for all nondefault flags preserves index-backed `.gitignore`
behavior. Git's
[read_skip_worktree_file_from_index](https://github.com/git/git/blob/v2.53.0/dir.c#L995)
only supplies an ignore carrier from the index when its skip-worktree flag is
set; those states cannot enter this fast path. No ignore rules are reimplemented.

The current raw index path/digest and effective case/sparse configuration must
match the parsed snapshot before and after the optimized query. A change fails
instead of silently using stale membership. The empty-remaining case succeeds
only when every actual selected path has the native tracked-path exclusion;
the index/config guards still run. An actually empty original selection retains
the original command, with no manufactured empty passing selection.

All selected inventory, regular-file/symlink rules, ignored-file refusal,
authority bindings, fragment handling, final derived-closure requirements,
source/gate currency, Git side-effect refusals and index/ref-boundary assertions
remain in place. Math and physics use their existing correct cwd-relative index
names; no domain scope is widened. There is no cache or historical fake pass.

## Packet and limits

`proposal.json` contains exact complete canonical preimages, successors and
unique guarded operations for `run-commit-scope.mjs`, `step6-commit.mjs` and the
short WORKFLOW addition. All other installed code, including the preceding
future-derived preflight fix and its strict final commit guards, remains
bytewise present. Root must retain the 45 existing ownership guards and update
real current ownership bindings only after adoption.

This is the first quality cycle for the distinct performance defect. The
complexity reduction is established from source; no runtime speedup or passing
check is claimed. Ambiguous environments can still run the original slow native
query because correctness takes precedence over guessing their semantics.
