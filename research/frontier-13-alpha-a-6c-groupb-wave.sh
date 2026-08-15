#!/bin/zsh
# Wait for the 6c cross-level refuter wave to clear the cap-8 pool, then re-dispatch
# group B's 10 unreturned risk_review refuter clusters (69 of its 74 routed items).
cd /Users/ianx/Projects/prestige-math-library
D=research/frontier-13-dispatch
while true; do
  n=$(ls $D/refuter-6c-xl-*.result.json 2>/dev/null | wc -l | tr -d ' ')
  [ "$n" -ge 8 ] && break
  sleep 20
done
for c in minpoly primary-decomposition diagonalisation diagonalisation-witnesses \
         inner-product-basics adjoint-isometry recurrence-rational closed-form \
         companion-transfer words-and-tilings; do
  node tools/dispatch.mjs --role refuter --brief research/frontier-13-brief-refuter.md \
    --task research/frontier-13-refuters/$c.md --label rr-$c --run frontier-13 --timeout 4200 \
    > $D/dispatch-rr-$c.out 2>&1 &
  sleep 2
done
wait
