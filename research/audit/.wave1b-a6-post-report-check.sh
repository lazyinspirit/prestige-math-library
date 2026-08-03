#!/usr/bin/env bash
printf '===== post-report-git-diff-check-clean-rerun =====\n'
printf '$ git diff --check\n'
git diff --check
ec=$?
printf '[exit %d]\n' "$ec"
exit "$ec"
