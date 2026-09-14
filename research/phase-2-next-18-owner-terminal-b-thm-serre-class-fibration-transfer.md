# Owner terminal review: thm-serre-class-fibration-transfer

**Disposition:** repaired.

**Terra finding.** The rejected carrier at judge hash `50a6b363ab0863b029c4bb5f0adbff19de6ccfc24b4162b878dbece75ca7858a` correctly identified that the item attributed AC to a UCT statement whose interface has no such hypothesis.

**Mathematical verdict and repair.** The item now distinguishes the UCT statement, which omits AC, from its directly cited cycle-and-boundary freeness dependency, which explicitly assumes AC. AC is retained and attributed only to that exact dependency, avoiding both the rejected misattribution and an unsupported choice-free strengthening.

**Source review.** Miller, MIT 18.906 notes, Lecture 30, Propositions 30.7–30.8, printed pp.107–108: https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf. I also reread both local interfaces: thm-universal-coefficient-theorem-for-homology-over-a-pid states no AC, while lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free explicitly begins “Assume the Axiom of Choice.”

**Current guards.** The repaired item has `itemHashJudge=3234d646d2003778fe1be2e4fe52baa1a83f8735b62b00b5d788faea5a8ed8d1` and `itemHashGuard=3232f76c2226541cb743c6e2ac468150dfdd9d401e30b34cef6faf12f9415b0f`. Focused proof and contract checks pass.
