# Step-4 mathematical proof disposition: variational flow and commutation

Run: physics-td-qft-rpm-62-2026-10-14
Owner/reviewer: /root/resolve_step4_td_math_proofs
Subject: lem-tdmath-variational-flow-and-commutation
Cycle: 1 (review, private repair proposal, complete proposal review)
Disposition: confirmed proof gap; private proposed repair resolves it while preserving the exact public Statement.

## Genuine observation and supplier review

I read the entire current subject and entire current local supplier lem-tdmath-local-contraction-flow before designing the repair. I inspected the actual imported Statement interfaces of every dependency named in the subject (chain rule, continuous integrability, Newton–Leibniz, Heine–Borel, Heine–Cantor, Euclidean completeness, Banach contraction, and continuous partials imply total differentiability). research/math-imports.json identifies these eight thm-* dependencies as read-only imports and does not identify either local lem-tdmath-* item as imported. No external full-text reading, imported audit, or historical absent bytes is asserted here.

The observed judge keep:false reason is correct about missing dimension-zero coverage. The current local-flow Statement explicitly assumes m>=1; Heine–Borel and Euclidean completeness explicitly assume positive coordinate dimension. The subject Statement imposes no positive-dimension restriction, but its setup and original step 1.1 invoke those suppliers indiscriminately. This is a local proof-interface gap, not a false zero-dimensional theorem or an open problem. The smallest missing argument is the singleton flow calculation; no new prerequisite theorem is necessary.

## Repair and complete-current proposal review

Private before: lem-tdmath-variational-flow-and-commutation-before.md.
Private proposed current: lem-tdmath-variational-flow-and-commutation-proposed.md.
These files are retained in this directory; canonical items, shared metadata, hashes, verification stamps, ledgers and native observations remain untouched.

The proposal adds step 1.1 proving the whole theorem directly at m=0, qualifies the cited positive-dimensional supplier facts/setup, and moves the former first step to 1.2 with its two corresponding references updated. The Statement, dependencies and derivative/bracket convention remain byte-for-byte unchanged.

I subsequently read the complete proposed item, including every unchanged proof step, and checked the following argument:

* Dimension zero: R^0 is explicitly the singleton zero vector space; empty domain is vacuous. For its nonempty domain the only vector field, every solution curve and every derivative into it are zero. Its sole endomorphism is simultaneously I_0 and zero. The constructed global constant flow is unique and jointly C^2, obeys the variational equation and initial condition, transports the sole field, and commutes with the sole second flow. No positive-dimensional supplier is applied to zero coordinates.
* Positive-dimensional setup and new 1.2: local contraction-flow supplies continuous solutions, integral equations and the uniform initial-data Lipschitz estimate. On a smaller initial ball/time cylinder, all segments remain inside the compact ball. C^2 regularity supplies continuous DX,D^2X and finite bounds, and Heine–Cantor supplies the uniform continuity used in the difference estimates. Continuous scalar component integrals and the chain rule/Newton–Leibniz justify the line-segment identity.
* Step 2.1: the matrix-curve space is nonempty and complete by positive finite coordinate completeness and uniform-limit continuity; entrywise/operator bounds give the correct norm. The affine Volterra operator has contraction constant L*delta<1. Subtraction gives (1-L*delta)||R_h|| <= delta||A_h-A_0||||Delta_h||, whose right side is o(||h||). This proves the initial derivative uniformly in time. The average-of-continuous-integrand argument proves its time derivative and the initial identity.
* Step 3.1: subtracting first-variation equations yields uniform O(||h||) continuity of J in initial data; the line-segment expansion of DX and uniform continuity of D^2X give the required uniform o(||h||) remainder in operator norm. The bilinear-map Volterra operator is a contraction on a complete nonempty curve space with the same constant. Its fixed point gives D_pJ[h](v), and the fixed-point difference bound gives continuity in p. Together with the integral equations this gives continuous second spatial derivatives, jointly with time.
* Step 3.2: with the declared bracket sign DY*X-DX*Y, bracket zero makes Y(phi_X) and J*Y(q) solve the identical linear IVP; the same contraction uniqueness proves transport.
* Step 4.1: the spatial, mixed and twice-time derivatives are the displayed continuous expressions. Continuous partials imply total differentiability applied to the flow and first derivative map proves joint C^2 regularity.
* Step 5.1: transported Y identifies the s derivative of phi_X^t(phi_Y^s(q)) with Y along that curve; IVP uniqueness gives commutation in the stated local neighborhood where the maps are defined and remain inside that neighborhood. The zero-dimensional case was already discharged directly.

No unresolved mathematical defect was found in that complete local argument. This is an owner scientific review of the private proposed carrier, not an independent native reader/judge verdict and not a source-reading certification. No software tests, validators, proof-layout, hashing, gate or engine transition was performed.

## Consumer disposition and handoff

This proof-only repair preserves the original mathematical Statement/Definition interface. It therefore creates no public-interface consumer seed. The actual direct item uses found by current-source search are thm-tdmath-codimension-one-frobenius, thm-tdmath-local-caratheodory-inaccessibility, and lem-tdmath-integrable-horizontal-orbits-have-empty-interior; they continue to receive the exact same local C^2/variational/commutation claim. Their mathematics was not independently re-reviewed under this proof-only repair. No indirect consumer review is represented or needed by the unchanged-interface rule.

Root must drain/freeze the native observations before permitting a canonical source edit, own proof-contract derivation-ID/metadata reconciliation and all formatting/hashing/native acceptance, and obtain any required fresh native Step-5 verdict. The former substantive step 1.1 becomes 1.2; new 1.1 is the dimension-zero branch. No canonical source edit has yet been authorized to this owner.
