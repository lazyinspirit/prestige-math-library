# frontier-33 batch 16 scaffold checkpoint

Authorised outputs: this notes file, sibling pages.json and coverage.json only. No content, plan structure or workflow state changed.

Read CLAUDE.md, README.md, SCHEMA.md, beta-16 and beta-batch tasks, and DT-5 design in full. Spec and batch match at orders 525/526. Design has only relative DT-5 ordering, and requires DT-1–DT-4, DG collars/tubes/flows, and singular homology for its homology corollary; spec instead lists DT-4 examples and CW complexes. Preserve spec and route the difference to drift; do not edit prerequisites here.

Conventions: boundaryless ambient smooth manifold; regular a<b; compact CLOSED band; negative-square index; downward field (2u,-2v); no Morse–Smale assumption; no ambient orientation; coefficients any abelian group, hence any ring additively. AC_omega is inherited where partitions, collars and metrics use it. Empty fibers and k=0,n are explicit.

Sources actually read via web full-PDF extraction (not merely search snippets): N handle construction pp.34–36 and §2.2 pp.37–42 through Remark 2.2.5; AD §2.1.e–f pp.30–36 in full; B §7.3 pp.144–145, §7.6 pp.149–151, Ch.9 opening and §9.1 pp.177–182 through Remark 9.4. Each source's TOC inspected. URLs and exact harvested headings are in coverage.json. Returned neighboring sections are not asserted as fully read. N design pp.23–45 does not match this PDF: §2.1 begins p.27, §2.2 p.37. B is an additional independent treatment for the smooth conclusion, not a relabelled N harvest.

Source precision: N Theorem 2.2.3 states HOMEOMORPHIC, not diffeomorphic. B Proposition 9.3 supplies smooth geometry. B Lemma 9.1 prints normalization by norm rather than norm squared; use the verified df=1 formula in AD/N. B Proposition 9.3 contains missing constants in the gradient display and a flat-endpoint inverse sigma whose smoothness at the attaching face cannot be assumed. Author with a transverse rounded profile and verify its inverse directly, not by copying that formula. N p.37 also has an inconsistent normal-form sign display; retain the descending model dictated by its vector field and Morse lemma. AD pp.34–36 extraction has missing minus signs and wrong endpoint symbols; use F=f-mu(|u|^2+2|v|^2), independently checked by differentiation, and the lower modified sublevel F<=c-epsilon. Explicit regional retraction must be checked at interfaces.

Smooth closure: construct product collars and monotone profiles; prove local rounding isotopy with cutoff normal velocity; identify a compact quadratic handle; glue a local modified regular boundary to the unchanged outside and use controlled flow on the complement; transport the framed attaching tube. Homotopy proof is separate, by stopped positive-coordinate contraction in the modified sublevel. Excision has its own standard-pair lemma, never a dependency on the already-published disk example (B-leaf).

Source fetch limitation: shell curl cannot resolve source hosts; web extraction can read N, AD and B. Cohen bookR3 failed via web; same-text virtualmath1 URL returned 404 and bookR4 timed out. Hirsch design URL failed via web. Neither is represented by an unread harvest. Coverage uses the verified N and AD design sources plus B. Mechanical fetch stamps must come from the validator and are not fabricated. URL/check outputs will be recorded below.

Per-item checkpoint records follow. Each contains the exact claim, dependencies, source locators, proof route and remaining authoring action; these are scaffold records, not completed proofs.

## def-closed-sublevel-and-level-set-of-a-smooth-function

Claim: For smooth f on a boundaryless smooth n-manifold, M^a={f<=a}, M_a={f=a}, and the closed band is f^{-1}([a,b]). Endpoints are included; regular endpoints may have empty fibers.

Dependencies: def-smooth-manifold.

Sources: N §2.2 p.37; AD §2.1.e p.30; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: definition. Names the sets in every subsequent band hypothesis.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time

Claim: If a<b and K=f^{-1}([a,b]) is compact with df nonzero on K, grad(f)/||grad(f)||^2 has a compactly supported smooth extension agreeing near K; its flow satisfies f(Phi_t(x))=f(x)+t while in K and reaches each intervening level in exactly its value difference.

Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, def-riemannian-gradient-of-a-smooth-function, cor-every-smooth-manifold-admits-a-riemannian-metric, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete.

Sources: AD Theorem 2.1.7 pp.30–31; N Theorem 2.2.2 p.38; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf.

Route: cutoff and controlled flow. Choose a relatively compact open neighborhood of K avoiding zeros before choosing the bump. No claim that the uncut normalized field is globally complete.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## thm-regular-interval-diffeomorphism

Claim: Under the regular compact-band hypothesis, (x,t)->Phi_{t-a}(x) is a level-preserving diffeomorphism M_a x [a,b] -> f^{-1}([a,b]).

Dependencies: lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-fundamental-theorem-on-flows.

Sources: B Lemma 9.1 pp.177–178; AD Theorem 2.1.7 pp.30–31; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: explicit inverse. Inverse is y -> (Phi_{a-f(y)}(y),f(y)); empty band handled explicitly.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-regular-sublevels-are-diffeomorphic

Claim: Under the same hypothesis, M^a and M^b are diffeomorphic as manifolds with boundary.

Dependencies: thm-regular-interval-diffeomorphism, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-fundamental-theorem-on-flows.

Sources: N Theorem 2.2.2 p.38; AD Theorem 2.1.7 pp.30–31; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: fixed-time ambient flow. Use the complete cutoff flow for time b-a. Do not claim it fixes all of M^a; the deformation retraction below does.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## prop-deformation-lemma-for-a-critical-point-free-slab

Claim: Under the regular compact-band hypothesis, H(s,x)=Phi_{-s max(f(x)-a,0)}(x) strongly deformation retracts M^b onto M^a.

Dependencies: lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time.

Sources: N Theorem 2.2.2 p.38; AD Remark 2.1.8 p.31; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: stopped flow. Check continuity at f=a, invariance of M^b and pointwise fixing of M^a; smoothness of H is not claimed.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## def-k-handle-core-cocore-attaching-region-and-belt-sphere

Claim: An n-dimensional k-handle is D^k x D^{n-k}, with core D^k x {0}, cocore {0} x D^{n-k}, attaching region S^{k-1} x D^{n-k}, attaching sphere S^{k-1} x {0}, outgoing region D^k x S^{n-k-1}, and belt sphere {0} x S^{n-k-1}. D^0 is a point and S^{-1} is empty.

Dependencies: .

Sources: N §2.1 pp.34–35; B §7.6 pp.149–150; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: definition. All k=0,...,n allowed. For n=0 the handle is a point and both boundary regions are empty.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## def-attaching-a-smooth-handle-with-corner-rounding

Claim: Attach H to a smooth n-manifold X with boundary by a smooth embedding h:S^{k-1} x D^{n-k}->boundary X, extending to an open neighborhood of the disk factor. The parametrized thickening carries its normal framing. Use product collars to glue, then round the compact codimension-two corner by a smooth monotone profile agreeing with the faces outside a smaller neighborhood.

Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-collar-neighborhood-theorem.

Sources: N §2.1 pp.34–36; B §7.3 pp.144–145 and §7.6 pp.149–150; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: definition. A fixed framed attaching embedding and compatible collar profile are the data; arbitrary homeomorphic smooth structures are excluded.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism

Claim: For fixed attaching and product-collar data, two compatible smooth monotone corner roundings yield diffeomorphic attachments, by an isotopy supported in the collar; identity outside that collar.

Dependencies: def-attaching-a-smooth-handle-with-corner-rounding, thm-fundamental-theorem-on-flows, lem-manifold-bump-for-a-compact-set-inside-an-open-set.

Sources: B §7.3 pp.144–145 (uniqueness exercise); N §2.1 pp.35–36 model; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: interpolation of transverse profiles. Write profiles as graphs transverse to a common diagonal direction; interpolate their graph functions and integrate the cutoff normal velocity. This is local profile uniqueness, not uniqueness of arbitrary smoothings.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-adapted-descending-field-near-a-compact-morse-band

Claim: If a compact band has finitely many nondegenerate critical points, there is a smooth field near it with df(X)<0 off these points and X=(2u,-2v) in smaller disjoint Morse charts. It extends with compact support to M while retaining those properties on the band.

Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, thm-morse-lemma, def-riemannian-gradient-of-a-smooth-function, cor-every-smooth-manifold-admits-a-riemannian-metric, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete.

Sources: N §2.2 p.37; B §9.1 p.179, Adapted gradient fields; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: patch local fields. A global Morse or compact ambient-manifold assumption is unnecessary: patch only near the compact band. Compact extension permits complete trajectories but need not be globally gradient-like for f.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-local-morse-sublevel-pair-is-a-handle-pair

Claim: In a sufficiently small Morse chart with f=c-|u|^2+|v|^2 there is a rounded index-k handle change between c-epsilon and c+epsilon: the local added piece has attaching face S^{k-1} x D^{n-k} on the lower level, core v=0, and the remaining region is a regular collar.

Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, thm-morse-lemma, thm-regular-interval-diffeomorphism.

Sources: N Theorem 2.2.3 and Lemma 2.2.4 pp.38–42; B Proposition 9.3 proof pp.180–181; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: explicit quadratic handle and smoothing. Use a genuine product handle parametrization h(u,v)=(sqrt(epsilon+|v|^2)u,v) on the attaching face; verify radial inverse, faces and smoothness at axes before rounding. Treat endpoint indices without polar coordinates. A whole unbounded quadratic sublevel is not itself the compact handle.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-gradient-flow-identifies-the-local-and-global-attaching-regions

Claim: For a compact band with one critical point at c, the local attaching embedding at c-epsilon transports by descending flow to any lower regular level a with no intervening critical values. The transported thickening is embedded with its induced framing; the complement of the local critical model is identified using regular collars.

Dependencies: lem-local-morse-sublevel-pair-is-a-handle-pair, lem-adapted-descending-field-near-a-compact-morse-band, thm-regular-interval-diffeomorphism, thm-fundamental-theorem-on-flows.

Sources: B Remark 9.4 pp.181–182 and Proposition 9.3 pp.179–181; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: flow transport. Use level difference as time after normalization outside charts; uniqueness excludes collisions and inverse flow proves the embedding. No Morse–Smale condition needed.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## thm-one-critical-point-handle-attachment

Claim: Let a<b be regular values of smooth f on a boundaryless n-manifold. If f^{-1}([a,b]) is compact and has exactly one critical point p, nondegenerate of index k, then M^b is diffeomorphic to M^a with one k-handle attached and corners rounded.

Dependencies: lem-local-morse-sublevel-pair-is-a-handle-pair, lem-gradient-flow-identifies-the-local-and-global-attaching-regions, cor-regular-sublevels-are-diffeomorphic, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism.

Sources: B Proposition 9.3 pp.179–181; N Theorem 2.2.3 pp.38–42 (topological version); https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf.

Route: local model and global collars. First restrict to a compact elementary band; glue the smooth model relative to the lower collar, absorb the upper collar, then transport to a,b. Do not infer a diffeomorphism from a homeomorphism.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-unstable-disk-is-the-handle-core

Claim: For the adapted descending field used in the construction, the disk of trajectories emanating from p down to M_a is the core disk and its boundary is the attaching sphere.

Dependencies: thm-one-critical-point-handle-attachment, lem-adapted-descending-field-near-a-compact-morse-band, lem-gradient-flow-identifies-the-local-and-global-attaching-regions, def-stable-and-unstable-sets-of-a-critical-point.

Sources: B Remark 9.4 pp.181–182; N Theorem 2.2.3 pp.38–39; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf.

Route: local unstable disk and transport. Identify only the truncated descending disk, not the entire unstable manifold or its global closure. Use the complete compact extension from the band lemma for the backward-limit terminology.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-one-critical-point-cell-attachment-homotopy-type

Claim: Under the one-critical-point hypotheses, M^b is homotopy equivalent to M^a with one k-cell attached along the transported attaching sphere; the comparison preserves the lower sublevel up to a homotopy of pairs.

Dependencies: thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, prop-deformation-lemma-for-a-critical-point-free-slab.

Sources: AD Theorem 2.1.11 proof pp.32–36; N Theorem 2.2.3 pp.38–42; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf.

Route: modified sublevel and explicit retraction. Use the source cutoff F=f-mu(|u|^2+2|v|^2) and positive-coordinate contraction stopped at f=c-epsilon. Prove all three regional formulas match; do not collapse the attaching tube while fixing its image in M^a.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## lem-relative-homology-of-the-standard-handle-pair

Claim: For any abelian coefficient group G and 0<=k<=n, H_i(D^k x D^{n-k},S^{k-1} x D^{n-k};G) is G for i=k and zero otherwise.

Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-singular-chain-homotopy-formula, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-spheres, cor-contractible-nonempty-spaces-have-the-homology-of-a-point.

Sources: N Theorem 2.2.3 p.39 cell consequence; AD Theorem 2.1.11 pp.32–36; published sphere and pair homology results; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: contraction of pairs and exact sequence. Contract the second disk factor as a map of pairs. Descend the prism identity to quotient chains. For k=1 explicitly use the augmentation G+G -> G; for k=0 use the empty relative subspace.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-relative-homology-of-a-single-handle-pair

Claim: Under the one-critical-point hypotheses, for any abelian group G (in particular the additive group of a coefficient ring R), H_i(M^b,M^a;G) is G in degree k and zero otherwise.

Dependencies: thm-one-critical-point-handle-attachment, lem-relative-homology-of-the-standard-handle-pair, thm-collar-neighborhood-theorem, thm-excision-for-singular-homology, thm-singular-chain-homotopy-formula.

Sources: N Theorem 2.2.3 p.39; AD Theorem 2.1.11 pp.32–36; geometric deduction using published excision; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: collar excision. Thicken the lower sublevel to a neighborhood retract, excise its interior away from the attaching tube, and retract the remaining collared pair to the standard handle pair. Check closure-in-interior before applying excision; no orientation of M needed.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## prop-simultaneous-attachment-at-a-morse-critical-value

Claim: If a compact band between regular endpoints has finitely many nondegenerate critical points, all at the same value c, M^b is obtained from M^a by attaching disjoint handles of the corresponding indices.

Dependencies: lem-adapted-descending-field-near-a-compact-morse-band, lem-local-morse-sublevel-pair-is-a-handle-pair, lem-local-critical-value-lowering-preserves-the-upper-sublevel, thm-regular-interval-diffeomorphism, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism.

Sources: N Remark 2.2.5 p.42; B Proposition 9.3 pp.179–181 applied in disjoint charts; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: disjoint local modifications. Use pairwise disjoint charts and supports in one construction; compact complement has no critical point. No artificial ordering of equal critical values.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-index-zero-handles-create-components

Claim: A 0-handle attaches along the empty set and adds one disjoint n-disk component.

Dependencies: def-attaching-a-smooth-handle-with-corner-rounding.

Sources: B §7.6 complement (4) p.151; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: empty attaching region. Works when X is empty and when n=0.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cor-index-n-handles-cap-boundary-spheres

Claim: For n>=2 an n-handle fills a boundary component diffeomorphic to S^{n-1}; for n=1 its attaching S^0 is a pair of boundary points, possibly in different components; for n=0 it is the same point attachment as a 0-handle.

Dependencies: def-attaching-a-smooth-handle-with-corner-rounding.

Sources: B §7.6 complement (4) p.151, with explicit low-dimensional qualification; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: whole attaching boundary. The connected-sphere boundary-component formulation fails in n=1. Preserve the full endpoint case with this qualification.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## rem-compact-critical-band-is-the-local-handle-theorem-hypothesis

Claim: Compactness is imposed on f^{-1}([a,b]), not on M or every sublevel. Properness implies this condition. No critical points alone does not imply a global band product.

Dependencies: thm-regular-interval-diffeomorphism, thm-one-critical-point-handle-attachment.

Sources: AD Theorems 2.1.7 and 2.1.11 pp.30–36; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: remark. Records the exact noncompact boundary; example on punctured plane below tests it.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## ex-sublevels-of-height-on-the-sphere

Claim: For height x_{n+1} on S^n, n>=1, the sublevels progress from empty to a disk to the whole sphere, using one 0-handle and one n-handle.

Dependencies: thm-one-critical-point-handle-attachment, cor-index-zero-handles-create-components, cor-index-n-handles-cap-boundary-spheres.

Sources: AD Corollary 2.1.9 pp.31–32; B §7.6 p.151; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: explicit cap coordinates and Hessians. Verify critical points and their indices directly, including S^1.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## ex-torus-from-one-handle-of-each-index

Claim: On S^1 x S^1 use f(theta,phi)=-cos(theta)-2cos(phi). Four critical points have indices 0,1,1,2 and distinct values -3,-1,1,3, giving one 0-handle, TWO 1-handles and one 2-handle.

Dependencies: thm-one-critical-point-handle-attachment.

Sources: B Proposition 9.3 pp.179–181 applied to the displayed function; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: coordinate Hessian calculation. Retain commissioned stable ID but correct misleading title to Torus from one 0-handle, two 1-handles and one 2-handle.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## ex-a-one-handle-joins-components-or-adds-a-tunnel

Claim: A surface 1-handle joining intervals on two different disk components gives one disk; an orientable attachment to two intervals on one disk boundary gives an annulus. Twisted attachments require separate orientation data.

Dependencies: def-attaching-a-smooth-handle-with-corner-rounding.

Sources: B §7.6 complements (2), (3), (5), pp.150–151; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf.

Route: explicit planar gluing. Different ambient components, not merely different boundary components, determine whether the component count drops.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## ex-simultaneous-handles-at-a-repeated-critical-value

Claim: For f(theta,phi)=-cos(theta)-cos(phi) on T^2, the two index-one critical points both have value zero. For 0<epsilon<2 the band [-epsilon,epsilon] attaches two disjoint 1-handles simultaneously.

Dependencies: prop-simultaneous-attachment-at-a-morse-critical-value.

Sources: N Remark 2.2.5 p.42 applied to the displayed torus function; https://www3.nd.edu/~lnicolae/Morse2nd.pdf.

Route: coordinate Hessians and disjoint charts. No dependence on an earlier B example; independently compute the four critical points.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product

Claim: On M=R^2 minus {(0,0)}, f(x,y)=x has no critical point. Over [-1,1] the fiber at 0 has two components and the fiber at -1 is connected, so no level-preserving product exists. The normalized field partial_x starting at (-1,0) exits M at time 1.

Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, thm-regular-interval-diffeomorphism.

Sources: AD Theorem 2.1.7 p.30 hypothesis test; explicit new punctured-plane construction; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: fiber components and explicit flow. The band is noncompact as a subspace of M; the escaping point is missing from M. This refutes a level-preserving product assertion.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.

## ex-relative-homology-of-a-handle-by-excision

Claim: For a single 2-handle in dimension 4, collar excision reduces relative homology to (D^2 x D^2,S^1 x D^2), then to (D^2,S^1): H_2=G and all other relative groups vanish.

Dependencies: cor-relative-homology-of-a-single-handle-pair, lem-relative-homology-of-the-standard-handle-pair.

Sources: AD Theorem 2.1.11 pp.32–36 applied with k=2; published excision and sphere homology; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf.

Route: finite relative calculation. Show the product-factor contraction and exact-sequence calculation.

Status: scaffolded; author and verify the stated construction at step 5. Validation pending final batch checks.


## Closure refinement: lem-local-critical-value-lowering-preserves-the-upper-sublevel

Claim: Choose a Morse chart f=c-|u|^2+|v|^2 containing {|u|^2+|v|^2<=2epsilon} and a smooth nonnegative mu supported in [0,2epsilon), with mu(0)>epsilon and -1<mu′<=0. The function F=f-mu(|u|^2+2|v|^2), equal to f outside the chart, has the same critical points, lowers p below c-epsilon, and has {F<=c+epsilon}={f<=c+epsilon}. If the original band contains only p, the modified band [c-epsilon,c+epsilon] is compact and regular.

Dependencies: thm-morse-lemma, lem-manifold-bump-for-a-compact-set-inside-an-open-set. Sources: N Lemma 2.2.4 pp.39–40; AD Construction of F pp.34–35; URLs https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Strategy: differentiate to obtain coefficients -(1+mu′) and 1-2mu′; outside the support F=f; inside support f<=c+epsilon. Choose mu by integrating a smooth slope in (-1,0] with integral greater than epsilon. Prove gluing and compare modified and original compact bands. Both local handle and cell corollary now depend explicitly on this lemma. This keeps the genuinely necessary cutoff result separate rather than hiding it in a long proof. Authoring obligation remains explicit.

Core correction: remove dependency on def-stable-and-unstable-sets-of-a-critical-point, whose published definition requires a globally complete downward gradient-like field for a globally Morse function. Our weaker band setting uses the local backward-limit disk extended down to a and does not assert that global hypothesis. Its final dependencies are thm-one-critical-point-handle-attachment, lem-adapted-descending-field-near-a-compact-morse-band, lem-gradient-flow-identifies-the-local-and-global-attaching-regions.

## Final scaffold validation and obligations

Final scope: 21 A items and 6 B items; no split required. All 18 commissioned A topics and 6 B constructions remain, with the compact-band adapted-field lemma, cutoff-lowering lemma, and standard-handle relative-homology lemma added to close proof needs. Each item has explicit deps. All 27 IDs are unused in items/ and its inline aliases; no B leaf is used as a prerequisite. Definitions/remarks have proof provenance not-applicable; the six explicit examples/hypothesis tests disclose generated constructions.

- `node tools/coverage-checklist.mjs research/frontier-33-batch-16.coverage.json`: PASS, 1 page, 44 harvested rows, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-16.pages.json`: PASS, 27 items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: PASS. This alone validates the currently unspliced plan, so it is insufficient for our new items.
- Review-only `/tmp/b16-plan-overlay.json` replaces only the two batch page records in a copy of the current spec. `node tools/validate-plan.mjs /tmp/b16-plan-overlay.json`: PASS including these 27 items, no unresolved IDs, forward edges, B-leaf edges, ordering violations or cycles. Canonical plan was never written.
- Whole-run `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: FAIL at the observed snapshot (415 scoped items), six missing dependency edges outside batch 16: ex-countable-dense-set-has-zero-hausdorff-dimension -> thm-rationals-dense; thm-kernel-range-annihilator-identities -> def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces; ex-dual-of-a-finite-dimensional-space -> thm-all-norms-on-a-finite-dimensional-space-are-equivalent; def-localization-of-a-category-at-a-class-of-morphisms -> def-functor; lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms -> def-flat-module. Other batches remain untouched.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-16.coverage.json --stamp --timeout-sec 20`: FAIL, 0/3 stamped; every source returned EAI_AGAIN. No verification stamp was manufactured.
- `node tools/url-sweep.mjs --coverage research/frontier-33-batch-16.coverage.json --out /tmp/frontier-33-batch-16-url-liveness.json --recover --fail-on-dead --timeout-ms 5000`: FAIL, all three URLs failed shell DNS resolution, 0 recovered. Its generic “no archived snapshot” output does not establish archive absence when DNS is unavailable. Preserve verified web-readable URLs rather than arbitrarily replacing texts to evade this environment failure.

Exact mechanically blocked URLs:

1. https://www3.nd.edu/~lnicolae/Morse2nd.pdf
2. https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf
3. https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf

Read evidence is in coverage.json, independently of the failed mechanical stamps. Next action: run fetch and URL gates in the build driver's network-enabled environment; resolve other batches' six dependencies through their owners, then rerun whole-run policy. This batch is NOT gate-ready until those mandatory checks pass. No permission request is needed or made. Step 5 must author and verify all per-item proof obligations, especially smooth local parametrizations and corner-profile isotopy; source figures are not proofs and no proof has been marked complete here. Preserve these source qualifications after compaction.

## Step-3 fix pass

Run: `frontier-33`; batch: `16`; review: `research/frontier-33-alpha-d-step3-scaffold-review.md`.

### Review finding record

- Finding id: `none-assigned`. The group-d review supplies no numbered batch-16 findings; its only batch-16 record is the verdict `sufficient`, together with the explicit statement that no scaffold claim, item id, prerequisite, page order, or coverage record requires repair.
- Disposition: accepted as a no-op, not pushed back. The claimed 21 A items and 6 B items remain source-grounded, dependency-closed, and below the 60-item A-page split threshold.
- Evidence: the current manifest still agrees with the plan at orders `525` and `526`; the A-page requirements are `stable-unstable-manifolds-and-morse-smale-transversality-examples` and `cw-complexes-and-cellular-homology`, and the B page requires only the A page. All 27 manifest item objects have an explicit `deps` array (including `deps: []` for the handle definition).
- Changed scaffold record: none. `research/frontier-33-batch-16.pages.json` and `research/frontier-33-batch-16.coverage.json` were intentionally left unchanged: changing a sufficient, reviewed claim or harvest would create an unsupported divergence.

### Source and harvest recheck

The three recorded sources were re-opened through the web reader on 2026-09-07 and the relevant full ranges remain live and consistent with the harvest: Nicolaescu, *An Invitation to Morse Theory*, §2.1 pp.34–36 and §2.2 pp.37–42 through Remark 2.2.5, https://www3.nd.edu/~lnicolae/Morse2nd.pdf; Audin–Damian, *Morse Theory and Floer Homology*, §2.1.e–f pp.30–36, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf; and Benedetti, *Lectures on Differential Topology*, §7.3 pp.144–145, §7.6 pp.149–151, and §9.1 pp.178–182 through Remark 9.4, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. The Benedetti URL redirects to the same hosted PDF; its recorded original URL remains live. The harvest still gives a concrete disposition to all 44 results, including the eight batch-16 deferred/out-of-scope rows whose destinations or scope reasons stand under the group-d review.

The local forced refresh `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-16.coverage.json --stamp --force --timeout-sec 20` returned `EAI_AGAIN` for all three hosts and made no coverage edit. This is a runner DNS failure, not a failed source: the web reader fetched each exact full-text PDF above, and the existing durable full-text stamps remain valid. The normal source-fetch gate therefore continues to report 3/3 verified sources; no replacement URL or archive copy is warranted.

The source passages continue to support the exact retained route: compact regular-band flow and deformation; the cutoff modification and its derivative bounds; local and global handle attachment with smooth corner treatment; the cell and relative-homology consequences; and the endpoint, repeated-value, and noncompact-band examples. No unfamiliar claim was added or relied on without this source recheck.

### Current validation record

- `node tools/coverage-checklist.mjs research/frontier-33-batch-16.coverage.json`: PASS — 1 page, 44 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-16.coverage.json --timeout-sec 20`: PASS — 3/3 sources fetch-verified.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-*.pages.json`: PASS — 923 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60`: PASS — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among populated page records.

Unresolved obligations: none for this Step-3 repair pass. The next owner must preserve this unchanged 27-item scaffold and its exact source qualifications when authoring at Step 5.

## Step-5 authoring

Read current required inputs and group-d sufficient verdict. Existing 27 IDs and plan order 525/526 preserved. Exact external dependency statements read from current items. Web source passages rechecked: N pp.34–42, B §§7.3,7.6,9.1; AD §§2.1.e–f obtained through search-within-PDF after direct line opens failed. No source-fetch stamp written. Mathematical source qualifications from Step 3 remain in force. AC_omega is explicit in statements using metrics/collars/partitions. No narrowing or dropped claim so far.

### Authored `def-closed-sublevel-and-level-set-of-a-smooth-function`

Claim/conventions: Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}(( -\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included. A regular value may have empty fiber. The smooth-manifold convention is [[def-smooth-manifold]].

Sources: N §2.2 p.37; AD §2.1.e p.30; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: def-smooth-manifold. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; definition/remark has no proof obligation. Validation pending focused batch checks. Next action: author `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`.

### Authored `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless manifold, $a<b$, and let $K=f^{-1}([a,b])$ be compact with $df\ne0$ on $K$. For any Riemannian metric there is a compactly supported smooth field $Y$ agreeing with $\operatorname{grad}f/\|\operatorname{grad}f\|^2$ near $K$. Its complete flow $\Phi$ satisfies $f(\Phi_t(x))=f(x)+t$ for $x\in K$ and $a-f(x)\le t\le b-f(x)$. Thus every intervening level is reached in exactly its value difference.

Sources: AD Theorem 2.1.7 pp.30–31; N Theorem 2.2.2 p.38; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf. Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, def-riemannian-gradient-of-a-smooth-function, cor-every-smooth-manifold-admits-a-riemannian-metric, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `thm-regular-interval-diffeomorphism`.

### Authored `thm-regular-interval-diffeomorphism`

Claim/conventions: Assume $\mathrm{AC}_\omega$. If $a<b$ and the closed band $K=f^{-1}([a,b])$ of a smooth function on a boundaryless manifold is compact and critical-point-free, its normalized flow gives a level-preserving diffeomorphism $T:M_a\times[a,b]\to K$, $T(x,t)=\Phi_{t-a}(x)$.

Sources: B Lemma 9.1 pp.177–178; AD Theorem 2.1.7 pp.30–31; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-fundamental-theorem-on-flows. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-regular-sublevels-are-diffeomorphic`.

### Authored `cor-regular-sublevels-are-diffeomorphic`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Under the compact regular closed-band hypothesis with $a<b$, the sublevels $M^a$ and $M^b$ are diffeomorphic as manifolds with boundary.

Sources: N Theorem 2.2.2 p.38; AD Theorem 2.1.7 pp.30–31; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: thm-regular-interval-diffeomorphism, lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time, thm-fundamental-theorem-on-flows. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `prop-deformation-lemma-for-a-critical-point-free-slab`.

### Authored `prop-deformation-lemma-for-a-critical-point-free-slab`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Under the compact regular closed-band hypothesis with $a<b$, the formula $H(s,x)=\Phi_{-s\max(f(x)-a,0)}(x)$, for $(s,x)\in[0,1]\times M^b$, is a strong deformation retraction onto $M^a$. Here $\Phi$ is the complete normalized ascending cutoff flow.

Sources: N Theorem 2.2.2 p.38; AD Remark 2.1.8 p.31; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `def-k-handle-core-cocore-attaching-region-and-belt-sphere`.

### Authored `def-k-handle-core-cocore-attaching-region-and-belt-sphere`

Claim/conventions: For integers $0\le k\le n$, the standard $n$-dimensional $k$-handle is $D^k\times D^{n-k}$. Its core is $D^k\times\{0\}$, its cocore is $\{0\}\times D^{n-k}$, its attaching region is $S^{k-1}\times D^{n-k}$, and its attaching sphere is $S^{k-1}\times\{0\}$. The outgoing region is $D^k\times S^{n-k-1}$ and the belt sphere is $\{0\}\times S^{n-k-1}$. Here $D^j$ is the closed unit disk, $D^0$ is a point, and $S^{-1}=\varnothing$. For $n=0$ both boundary regions are empty.

Sources: N §2.1 pp.34–35; B §7.6 pp.149–150; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: . Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; definition/remark has no proof obligation. Validation pending focused batch checks. Next action: author `def-attaching-a-smooth-handle-with-corner-rounding`.

### Authored `def-attaching-a-smooth-handle-with-corner-rounding`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $X$ be a smooth $n$-manifold with boundary. Attach the handle of [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]] by a smooth embedding $h:S^{k-1}\times D^{n-k}\to\partial X$ that extends to a neighborhood of the disk factor. Form the quotient of $X\sqcup(D^k\times D^{n-k})$ identifying $z$ with $h(z)$ in the attaching region. The disk coordinates trivialize the normal bundle of the attaching sphere; this framing is part of the data. Use collars from [[thm-collar-neighborhood-theorem]] to give the seam its product smooth charts, then round the compact codimension-two corner. A compatible rounding is a smooth monotone planar profile, transverse to a common diagonal direction, agreeing with the two faces away from a small corner neighborhood. In coordinates along that diagonal it is a graph. This convention fixes the gluing and collar data; changing the attaching embedding is a different question. There is no corner to round when $k=0$ or $k=n$.

Sources: N §2.1 pp.34–36; B §7.3 pp.144–145 and §7.6 pp.149–150; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-collar-neighborhood-theorem. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; definition/remark has no proof obligation. Validation pending focused batch checks. Next action: author `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism`.

### Authored `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism`

Claim/conventions: For fixed attaching and product-collar data, two compatible smooth monotone roundings of a handle attachment are diffeomorphic by an isotopy supported in that collar. The diffeomorphism is the identity outside the collar.

Sources: B §7.3 pp.144–145 (uniqueness exercise); N §2.1 pp.35–36 model; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-attaching-a-smooth-handle-with-corner-rounding, thm-fundamental-theorem-on-flows, lem-manifold-bump-for-a-compact-set-inside-an-open-set. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `lem-adapted-descending-field-near-a-compact-morse-band`.

### Authored `lem-adapted-descending-field-near-a-compact-morse-band`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Suppose the compact closed band of a smooth function on a boundaryless manifold has only finitely many critical points, all nondegenerate. There is a smooth field $X$ with $df(X)<0$ at every noncritical point of the band and $X=(2u,-2v)$ in smaller disjoint Morse charts $f=f(p)-|u|^2+|v|^2$. It can be chosen compactly supported on $M$ and hence complete.

Sources: N §2.2 p.37; B §9.1 p.179, Adapted gradient fields; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, thm-morse-lemma, def-riemannian-gradient-of-a-smooth-function, cor-every-smooth-manifold-admits-a-riemannian-metric, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-compactly-supported-vector-fields-are-complete. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `lem-local-critical-value-lowering-preserves-the-upper-sublevel`.

### Authored `lem-local-critical-value-lowering-preserves-the-upper-sublevel`

Claim/conventions: Assume $\mathrm{AC}_\omega$. In a Morse chart $f=c-|u|^2+|v|^2$ containing the closed ball $|u|^2+|v|^2\le2\varepsilon$, choose a smooth $\mu:[0,\infty)\to[0,\infty)$ supported in $[0,2\varepsilon)$ with $\mu(0)>\varepsilon$ and $-1<\mu^{\prime}\le0$. Set $F=f-\mu(|u|^2+2|v|^2)$ in the chart and $F=f$ outside. This is smooth, has the same critical points as $f$, lowers $p$ below $c-\varepsilon$, and satisfies $\{F\le c+\varepsilon\}=\{f\le c+\varepsilon\}$. If $f^{-1}([c-\varepsilon,c+\varepsilon])$ is compact with only the critical point $p$, the corresponding closed band of $F$ is compact and regular.

Sources: N Lemma 2.2.4 pp.39–40; AD Construction of F pp.34–35; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: thm-morse-lemma, lem-manifold-bump-for-a-compact-set-inside-an-open-set. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `lem-local-morse-sublevel-pair-is-a-handle-pair`.

### Authored `lem-local-morse-sublevel-pair-is-a-handle-pair`

Claim/conventions: Assume $\mathrm{AC}_\omega$. In a sufficiently small Morse chart $f=c-|u|^2+|v|^2$, with $u\in\mathbb R^k$ and $v\in\mathbb R^{n-k}$, the change across $c$ is a rounded index-$k$ handle: a compact product piece attaches along $S^{k-1}\times D^{n-k}$ on $f=c-\varepsilon$, its core is $v=0$, and after a local modification the remaining region up to $c+\varepsilon$ is a regular collar. The modification agrees with $f$ off a compact subset of the chart. The collar assertion is made inside a compact band having no other critical point.

Sources: N Theorem 2.2.3 and Lemma 2.2.4 pp.38–42; B Proposition 9.3 proof pp.180–181; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, thm-morse-lemma, thm-regular-interval-diffeomorphism, lem-local-critical-value-lowering-preserves-the-upper-sublevel. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`.

### Authored `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $f^{-1}([a,b])$ be compact, with regular endpoints and exactly one critical point of value $c$. For the local Morse attaching embedding on $M_{c-\varepsilon}$, where $a<c-\varepsilon<c$, descending flow transports its entire thickening to $M_a$ as an embedded framed attaching region, provided there is no intervening critical value. The regular regions outside the local critical model are identified by collars.

Sources: B Remark 9.4 pp.181–182 and Proposition 9.3 pp.179–181; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: lem-local-morse-sublevel-pair-is-a-handle-pair, lem-adapted-descending-field-near-a-compact-morse-band, thm-regular-interval-diffeomorphism, thm-fundamental-theorem-on-flows. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `thm-one-critical-point-handle-attachment`.

### Authored `thm-one-critical-point-handle-attachment`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

Sources: B Proposition 9.3 pp.179–181; N Theorem 2.2.3 pp.38–42 (topological version); https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf. Dependencies: lem-local-morse-sublevel-pair-is-a-handle-pair, lem-gradient-flow-identifies-the-local-and-global-attaching-regions, cor-regular-sublevels-are-diffeomorphic, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-unstable-disk-is-the-handle-core`.

### Authored `cor-unstable-disk-is-the-handle-core`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses. For the adapted descending field used in the handle construction, the disk consisting of $p$ and its outgoing trajectories down to $M_a$ is the handle core; its boundary is the attaching sphere. Here the disk is defined by the local backward limit to $p$ and continuation down to $a$. No assertion about a global unstable-set closure is made.

Sources: B Remark 9.4 pp.181–182; N Theorem 2.2.3 pp.38–39; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf. Dependencies: thm-one-critical-point-handle-attachment, lem-adapted-descending-field-near-a-compact-morse-band, lem-gradient-flow-identifies-the-local-and-global-attaching-regions. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-one-critical-point-cell-attachment-homotopy-type`.

### Authored `cor-one-critical-point-cell-attachment-homotopy-type`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses. Then $M^b$ is homotopy equivalent to $M^a$ with one $k$-cell attached along the transported attaching sphere. The comparison respects the lower sublevel up to homotopy of pairs.

Sources: AD Theorem 2.1.11 proof pp.32–36; N Theorem 2.2.3 pp.38–42; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://www3.nd.edu/~lnicolae/Morse2nd.pdf. Dependencies: thm-one-critical-point-handle-attachment, cor-unstable-disk-is-the-handle-core, prop-deformation-lemma-for-a-critical-point-free-slab, lem-local-critical-value-lowering-preserves-the-upper-sublevel. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `lem-relative-homology-of-the-standard-handle-pair`.

### Authored `lem-relative-homology-of-the-standard-handle-pair`

Claim/conventions: For any abelian group $G$, integers $0\le k\le n$, and $i\ge0$, the standard handle pair has $H_i(D^k\times D^{n-k},S^{k-1}\times D^{n-k};G)\cong G$ if $i=k$ and zero otherwise. Here $D^0$ is a point and $S^{-1}=\varnothing$.

Sources: N Theorem 2.2.3 p.39 cell consequence; AD Theorem 2.1.11 pp.32–36; published sphere and pair homology results; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: def-k-handle-core-cocore-attaching-region-and-belt-sphere, thm-singular-chain-homotopy-formula, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-spheres, cor-contractible-nonempty-spaces-have-the-homology-of-a-point. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-relative-homology-of-a-single-handle-pair`.

### Authored `cor-relative-homology-of-a-single-handle-pair`

Claim/conventions: Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses, with critical index $k$. For every abelian group $G$ and $i\ge0$, $H_i(M^b,M^a;G)\cong G$ if $i=k$ and zero otherwise. In particular this holds for the additive group of any coefficient ring. No orientation of $M$ is needed.

Sources: N Theorem 2.2.3 p.39; AD Theorem 2.1.11 pp.32–36; geometric deduction using published excision; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: thm-one-critical-point-handle-attachment, lem-relative-homology-of-the-standard-handle-pair, thm-collar-neighborhood-theorem, thm-excision-for-singular-homology, thm-singular-chain-homotopy-formula. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `prop-simultaneous-attachment-at-a-morse-critical-value`.

### Authored `prop-simultaneous-attachment-at-a-morse-critical-value`

Claim/conventions: Assume $\mathrm{AC}_\omega$. Let $f$ be smooth on a boundaryless manifold and let $a<b$ be regular values. Suppose the closed band is compact and its critical points are finitely many nondegenerate points $p_1,\ldots,p_m$, all at the same value $c\in(a,b)$. Then $M^b$ is obtained from $M^a$, up to diffeomorphism and corner rounding, by attaching disjoint handles of indices $\operatorname{ind}(p_j)$. If $m=0$, no handles are attached and the regular-band conclusion applies.

Sources: N Remark 2.2.5 p.42; B Proposition 9.3 pp.179–181 applied in disjoint charts; https://www3.nd.edu/~lnicolae/Morse2nd.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: lem-adapted-descending-field-near-a-compact-morse-band, lem-local-morse-sublevel-pair-is-a-handle-pair, lem-local-critical-value-lowering-preserves-the-upper-sublevel, thm-regular-interval-diffeomorphism, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-index-zero-handles-create-components`.

### Authored `cor-index-zero-handles-create-components`

Claim/conventions: A $0$-handle on a smooth $n$-manifold with boundary attaches along the empty set and adds one disjoint $n$-disk component. This includes an empty starting manifold and $n=0$.

Sources: B §7.6 complement (4) p.151; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-attaching-a-smooth-handle-with-corner-rounding. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cor-index-n-handles-cap-boundary-spheres`.

### Authored `cor-index-n-handles-cap-boundary-spheres`

Claim/conventions: An $n$-handle attaches along its whole $S^{n-1}$ boundary. For $n\ge2$ it fills a boundary component diffeomorphic to $S^{n-1}$. For $n=1$ its attaching $S^0$ is a pair of boundary points, possibly in different components. For $n=0$ it is the same disjoint point attachment as a $0$-handle.

Sources: B §7.6 complement (4) p.151, with explicit low-dimensional qualification; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-attaching-a-smooth-handle-with-corner-rounding. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis`.

### Authored `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis`

Claim/conventions: The hypotheses of [[thm-regular-interval-diffeomorphism]] and [[thm-one-critical-point-handle-attachment]] concern the compactness of the closed band $f^{-1}([a,b])$, not compactness of $M$ or of every sublevel. A proper function has this compact-band property because $[a,b]$ is compact. Without compactness, absence of critical points alone does not guarantee a level-preserving product: a trajectory may leave the manifold in finite time. The companion page gives an explicit punctured-plane example.

Sources: AD Theorems 2.1.7 and 2.1.11 pp.30–36; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: thm-regular-interval-diffeomorphism, thm-one-critical-point-handle-attachment. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; definition/remark has no proof obligation. Validation pending focused batch checks. Next action: author `ex-sublevels-of-height-on-the-sphere`.

### Authored `ex-sublevels-of-height-on-the-sphere`

Claim/conventions: For height $f(x)=x_{n+1}$ on $S^n\subset\mathbb R^{n+1}$, $n\ge1$, the sublevel is empty for $a<-1$, a point at $a=-1$, a closed $n$-disk for $-1<a<1$, and all of $S^n$ for $a\ge1$. The regular-sublevel changes use one $0$-handle and one $n$-handle.

Sources: AD Corollary 2.1.9 pp.31–32; B §7.6 p.151; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf, https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: thm-one-critical-point-handle-attachment, cor-index-zero-handles-create-components, cor-index-n-handles-cap-boundary-spheres. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `ex-torus-from-one-handle-of-each-index`.

### Authored `ex-torus-from-one-handle-of-each-index`

Claim/conventions: On $T^2=S^1\times S^1$, let $f(\theta,\phi)=-\cos\theta-2\cos\phi$. It yields one $0$-handle, two $1$-handles and one $2$-handle, with critical values $-3,-1,1,3$.

Sources: B Proposition 9.3 pp.179–181 applied to the displayed function; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: thm-one-critical-point-handle-attachment. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `ex-a-one-handle-joins-components-or-adds-a-tunnel`.

### Authored `ex-a-one-handle-joins-components-or-adds-a-tunnel`

Claim/conventions: A surface $1$-handle attached along intervals on two different disk components produces a disk. An orientable $1$-handle attachment along two intervals of the boundary of one disk produces an annulus. A twisted attachment to one disk requires different orientation data.

Sources: B §7.6 complements (2), (3), (5), pp.150–151; https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf. Dependencies: def-attaching-a-smooth-handle-with-corner-rounding. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `ex-simultaneous-handles-at-a-repeated-critical-value`.

### Authored `ex-simultaneous-handles-at-a-repeated-critical-value`

Claim/conventions: On $T^2$ let $f(\theta,\phi)=-\cos\theta-\cos\phi$. Its two index-one critical points both have value zero. For every $0<\varepsilon<2$, crossing the closed band $[-\varepsilon,\varepsilon]$ attaches two disjoint $1$-handles simultaneously.

Sources: N Remark 2.2.5 p.42 applied to the displayed torus function; https://www3.nd.edu/~lnicolae/Morse2nd.pdf. Dependencies: prop-simultaneous-attachment-at-a-morse-critical-value. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product`.

### Authored `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product`

Claim/conventions: The assertion that every critical-point-free closed band is a level-preserving product is false when compactness is omitted. On $M=\mathbb R^2\setminus\{(0,0)\}$, the function $f(x,y)=x$ has no critical point, but $f^{-1}([-1,1])$ is not a product with its levels as fibers. Its Euclidean normalized ascending gradient trajectory from $(-1,0)$ escapes at time $1$.

Sources: AD Theorem 2.1.7 p.30 hypothesis test; explicit new punctured-plane construction; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: def-closed-sublevel-and-level-set-of-a-smooth-function, thm-regular-interval-diffeomorphism. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: author `ex-relative-homology-of-a-handle-by-excision`.

### Authored `ex-relative-homology-of-a-handle-by-excision`

Claim/conventions: For a single $2$-handle crossing in a $4$-manifold satisfying the compact-band hypotheses (and $\mathrm{AC}_\omega$), collar excision reduces the relative homology to $(D^2\times D^2,S^1\times D^2)$ and then to $(D^2,S^1)$. With any abelian coefficients $G$, the result is $G$ in degree $2$ and zero in every other degree.

Sources: AD Theorem 2.1.11 pp.32–36 applied with k=2; published excision and sphere homology; https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf. Dependencies: cor-relative-homology-of-a-single-handle-pair, lem-relative-homology-of-the-standard-handle-pair. Provenance follows the manifest: source formulations/proofs are adapted, explicit generated examples retain generation data. Written as draft; proof and item-specific boundary worksheet saved. Validation pending focused batch checks. Next action: run the required validators.

### Step-5 completion and validation

Authored all 27 stable IDs listed in the per-item entries above: 21 on the A page and 6 on the B page. Both planned pages are written directly in `library/differential-topology/`. All 29 content files remain `status: draft`; no judge, publication, approval, or workflow-state record was written. The output manifest now contains the authored statement text. Page IDs, order, category, prerequisites, item order, and item IDs are unchanged.

Final mathematical and citation refinements:

- The compact regular band, regular endpoints, negative-square index, downward model `(2u,-2v)`, arbitrary abelian coefficients, and `D^0`/empty-sphere conventions are retained. The inherited `AC_omega` assumption is now explicit in the relevant results and examples. No commissioned claim was dropped; no smooth conclusion was weakened to a topological conclusion.
- `lem-local-morse-sublevel-pair-is-a-handle-pair` uses the explicit product map `(U,V) -> (sqrt(epsilon+d|V|^2) U, sqrt(d) V)` and its smooth inverse, then a positive-radius graph isotopy. Its exact final dependencies add `thm-fundamental-theorem-on-flows` and `lem-manifold-bump-for-a-compact-set-inside-an-open-set`, cited at the moving-graph step. This is a batch-local logical-edge completion, not a change to plan structure. The direct flow citation avoids treating the corner-uniqueness statement as a theorem about arbitrary boundary isotopies. The graph-root calculation explicitly uses `x+mu(x)>=mu(0)>epsilon`. Sources remain N Lemma 2.2.4 / Theorem 2.2.3 pp.39–42 and B Proposition 9.3 pp.179–181 at their recorded URLs. The new smooth details are an adapted proof, not a claim that N proves diffeomorphism or that B's flat inverse is smooth.
- `cor-one-critical-point-cell-attachment-homotopy-type` writes the two moving-coordinate regions and fixed region explicitly, checks their interfaces and zero-vector limit, and uses the lower modified sublevel. It does not use the sign-corrupted AD extraction literally.
- `cor-relative-homology-of-a-single-handle-pair` explicitly thickens the lower sublevel to the open attaching collar before excising its closed copy. The quotient-chain isomorphism is justified by cycle lifting and filling in the acyclic kernel. The radius inequalities are strict; the standard-pair lemma separately treats `k=0`, `k=1`, and degree zero. No orientation assumption is smuggled into coefficients.
- The sphere example includes the singular threshold sublevel consisting of one point. The torus calculations count both saddles. Generated examples retain their exact generation roles; no generated statement is a dependency target. Statements and local proofs adapted from the named treatments retain `ai-altered` component provenance; definitions and the remark retain `not-applicable` proof provenance.

Checks actually run on the final content:

- `node tools/tsx-run.mjs tools/precheck.mts` with all 27 explicit `items/ID.md` arguments from this manifest: PASS, 23 proof-bearing items checked, 0 failing. The first run requested canonical phase renumbering for all 23 proofs; those repairs were applied to stored proof rows, step references, citation uses, derivations, and boundary evidence before the passing reruns. Definitions and the remark are not counted as proofs.
- `node tools/validate-plan.mjs`: the bare requested command returned usage/exit 2 because this executable requires a plan path. `node tools/validate-plan.mjs research/plan-spec.json` was then run and passed, including a final rerun after citation-edge completion. The validator reports no item cycles, forward references, B-page dependencies, or unresolved IDs among populated page records; 463 other planned pages still have no item lists and are checked only at page level. No plan edit was made here.
- `node tools/content-policy.mjs research/frontier-33-batch-16.pages.json`: PASS, 27 scoped items, 0 errors, 0 warnings. The first attempt rejected flow-style source-reference arrays; all source records were expanded to conventional block YAML and the check was rerun successfully.
- `node tools/proof-contract.mjs research/frontier-33-batch-16.proof-contracts.json --strict`: PASS, 23/23 proof-bearing items, 0 errors, 0 warnings. Every fact citation carries the exact current target statement/definition and actual proof uses. Every numbered row has its derivation inputs. Initial unanchored boundary rows were corrected to mathematical `not_applicable` dispositions where appropriate; applicable rows identify actual final proof steps.
- `node tools/rendercheck.mjs` with the 27 explicit item paths and both explicit page paths: PASS, 29 files. The real KaTeX and renderer YAML parser ran; no malformed math delimiters, invalid math, or frontmatter errors were reported.
- Final scoped status check: all 27 items and both pages are draft; no judge records are present.

No finite-smoke computation was used as proof. No source-fetch or independent-review success is claimed for Step 5. The existing coverage and independent group-d review were preserved. Outstanding authoring obligations: none. Blockers: none. Next action belongs to the build driver; this dispatch makes no transition or publication request.

### Gate repair checkpoint

`prop-simultaneous-attachment-at-a-morse-critical-value` no longer applies a one-critical-point transport lemma to a multi-critical band. Its proof now invokes `lem-local-critical-value-lowering-preserves-the-upper-sublevel` for the simultaneous disjoint modifications and `thm-regular-interval-diffeomorphism` only on the explicitly critical-point-free complementary and lower bands; item dependencies, manifest, exact citation contract, and derivation inputs were updated together. Reflow was unchanged; focused precheck/render, manifest dependencies, content policy, strict contract, citation fidelity, and the refreshed author receipt pass.
