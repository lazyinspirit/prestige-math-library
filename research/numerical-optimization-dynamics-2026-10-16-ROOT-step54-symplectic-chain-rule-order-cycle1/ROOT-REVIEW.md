# First focused cycle: explicit chain-rule order in F4

Research only. The Sol5.4 concern identifies an incorrect/ambiguous paraphrase: the actual chain-rule supplier says D(g composed with f)(z)=Dg(f(z))Df(z). The written factors follow outer-map then inner-map order, while their application to a vector acts rightmost first. “Reverse written order” confuses these conventions. The smallest repair replaces only F4 with the exact formula and states the evaluation point and factor positions. Statement, dependencies and both proof steps remain bytewise unchanged.

The complete target and actual chain-rule supplier Statement/Facts/Proof were read, together with the complete shear lemma and both local-domain/procedure Definitions. For symplectic Euler, the admitted step is D_h composed with K_h, so its actual Jacobian is

    DD_h(K_h(z)) DK_h(z).

For leapfrog it is K_(h/2) composed with D_h composed with K_(h/2), so its actual Jacobian is

    DK_(h/2)(D_h(K_(h/2)(z))) DD_h(K_(h/2)(z)) DK_(h/2)(z).

All evaluation points lie in the admitted local domains by proof1.1. Every factor satisfies A^T J A=J by the actual shear lemma. The existing identity (AB)^T J (AB)=B^T(A^T J A)B=J holds for either pair of symplectic factors in their actual order; iterating it proves the original claimed identity for both compositions. The shear supplier also gives C1 maps, so the chain rule and continuity of the finite matrix products give the unchanged C1/continuous-Jacobian conclusion. No energy-conservation or global-domain claim is introduced, and all existing signed/admitted-step and dimensional cases remain as before. No external source reading or executed check was needed for this direct supplier comparison.

Direct searches find two item consumers: thm-separable-vortex-inspired-leapfrog-is-reversible-symplectic-volume-preserving-order-two (F2) and lem-finite-modified-hamiltonian-exists (F1), plus the geometric integration page carrier. Only their occurrence/dependency/interface clauses were inspected. They use the unchanged symplecticity Statement, so no consumer source edit or blanket proof rereview is indicated. This Facts-only correction does not trigger the changed-Statement/Definition consumer-closure rule and confers no native current review credit.

Exact F4 replacement, full before/proposed source and source.diff are provided. Actual original judge objects are preserved separately. The native owner must compare live full preimage after actual judge drain and genuine adjudication/assignment, then apply only an appropriate guarded repair. Any target proof-contract F4 paraphrase/citation should be synchronized with actual literal supplier text through ordinary native authoring. No metadata edit or new approval record is supplied here. Root retains source bindings, certification, formatting and all gate responsibilities; no canonical/metadata writes, hashes, checks/tests/gates or native controls were performed.
