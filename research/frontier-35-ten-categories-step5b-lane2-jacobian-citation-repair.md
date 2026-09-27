# Lane-2 Jacobian citation repair

Item: `cor-jacobian-presentation-differentials`. Pre-edit guard `ffde1d2ec5d0d97db67d81a4a1cc7e1b10d53cd5ae4203197da9b09feff5630c`; post-edit guard `53af15f104dfb7f70f6bb7c429fe3f3424ec12ff97c5cc11ec9dd895e2861b47`.

The draft corollary's F3 attributed generation of `Ω_{P/A}` and the universal derivation to `def-derivation-algebra`. That source defines the laws of an `A`-derivation but does not construct `Ω`; `lem-differentials-polynomial-algebra-free` supplies the free differential basis and formula in F1. Proof 1.2 also cited F3 for the `B`-module calculation in `I/I²`, which follows from the conormal source F2 and elementary quotient-module algebra.

F3 now states only the derivation laws from its cited definition and points to F1 for the polynomial differential module. Proof 1.2 cites F2; proof 2.1 uses the derivation laws together with F1 and F2. The exported Statement, dependency list, Jacobian calculation, and proof conclusion are unchanged. The batch-6 and merged proof contracts were synchronized to the exact new fact/step mapping and the current carrier. The three already reviewed incoming lane-2 evidence rows and the reviewed outgoing Frobenius example row were rebound to the new guard; the F3 pair is marked `repaired`.

Validation: focused precheck, rendercheck and strict batch-6 plus merged proof-contract checks all passed with zero errors. There is no central plan delta. Proposed ledger row: `confirmed_nonfatal` citation-fidelity defect, repaired at the guards above; no Statement/Definition change and no mathematical conclusion changed.
