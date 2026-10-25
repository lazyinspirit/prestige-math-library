# Step 3a reader report — batch 62

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader (`reader-62`)  
Verdict: both assigned pages pass; one in-scope statement clarification was repaired; no uneditable defect or blocker remains.

## Reviewed inventory

### Assigned pages

- `qftx-abelian-higgs-vortex-existence-mathematics` — [library/quantum-field-theory-mathematics/qftx-abelian-higgs-vortex-existence-mathematics.md](../library/quantum-field-theory-mathematics/qftx-abelian-higgs-vortex-existence-mathematics.md)
- `qftx-abelian-higgs-vortex-existence-mathematics-examples` — [library/quantum-field-theory-mathematics/qftx-abelian-higgs-vortex-existence-mathematics-examples.md](../library/quantum-field-theory-mathematics/qftx-abelian-higgs-vortex-existence-mathematics-examples.md)

Both carriers are draft mathematics pages with `page_layout: compact-v1` and empty Markdown bodies. The A page inventories five development items in supplier order; the B page inventories the companion example and requires the A page.

### Assigned items, read in dependency order

1. `def-qftx-critical-abelian-higgs-divisor-data`
2. `lem-qftx-taubes-disk-barriers-and-monotone-iteration`
3. `thm-qftx-taubes-arbitrary-divisor-plane-vortex`
4. `thm-qftx-critical-vortex-global-energy-minimum`
5. `thm-qftx-critical-flux-cylinder-linear-energy`
6. `ex-qftx-multiple-centred-critical-vortex`

I opened both pages and all six item bodies, including statements, facts, proofs, remarks/references, and current contracts. The direct mathematical suppliers needed by the proofs were opened at their exact statements and the hypotheses used here were checked: `def-axiom-of-choice`, `def-sobolev-space-wkp-and-its-norm`, `thm-lax-milgram`, `thm-weak-maximum-principle-for-coercive-divergence-form-equations`, `thm-weak-global-w-two-p-dirichlet-regularity-for-the-laplacian`, `thm-global-schauder-regularity-for-the-weak-dirichlet-laplacian`, `thm-higher-order-sobolev-embedding`, `thm-extension-theorem-for-bounded-smooth-domains`, `thm-interior-w-two-p-estimate-for-uniformly-elliptic-equations`, `thm-interior-schauder-estimate-for-uniformly-elliptic-equations`, `lem-w-one-two-is-a-hilbert-space`, `cor-cauchy-schwarz-inequality-for-l-two`, `thm-integral-triangle-inequality`, `thm-monotone-convergence-for-the-integral`, `thm-general-stokes-theorem`, `thm-strong-maximum-principle-for-classical-subharmonic-functions`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `def-polar-surface-measure-on-the-unit-sphere`, `cor-real-and-euclidean-vector-valued-ascoli-arzela`, and `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`.

The source statements support the actual uses: Lax–Milgram is applied on the real $W^{1,2}$ Hilbert norm with a coercive shifted form; the weak maximum principle has the needed nonnegative zero-order coefficient and nonpositive boundary trace; global $W^{2,p}$ regularity is used with $n=2$ and $p>2$; the embeddings use $p>2$; and the interior estimates are used only on smooth solutions with the stated bounded right-hand sides. Fubini, polar coordinates, monotone convergence, Stokes, and Ascoli are used with their recorded measurability, integrability, compactness, and orientation hypotheses.

### Consumer check after the repair

The repaired lemma feeds the arbitrary-divisor theorem, which in turn feeds the global-minimum theorem, the cylinder theorem, the example, and the current-run physics theorem `pthm-qftx-n2-linear-monopole-bps-vortex-bound` outside this batch. I read these consumers and checked their actual uses. The arbitrary-divisor proof uses the barrier solution, its distributional equation, center regularity, order bounds, and local compactness. The later mathematical items use the resulting existence, flux, energy, and collar conclusions. The QFT physics theorem uses those same stated results for its linear truncation. The repair makes previously implicit distributional signs and a cancellation extension explicit; it changes none of those mathematical conclusions or hypotheses. No consumer repair was needed.

## Source review

- David Tong, [*TASI Lectures on Solitons*, Lecture 3](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf), §§3.1–3.3, printed pp. 70–75: I inspected the retrieved 24-page PDF, including the critical model, winding/flux discussion, square completion (Eq. 3.8), first-order equations (Eq. 3.10), and position-modulus discussion. This supports model and normalization context, not the local disk iteration or cylinder proof. The lecture uses its own field normalization; the items' local definitions and proofs supply the exact normalization used here.
- Shouxin Chen and Yisong Yang, [“Existence of Multiple Vortices in Supersymmetric Gauge Field Theory”](https://arxiv.org/pdf/1203.3071), §§2–3 and 5–7, PDF pp. 2–20: I inspected the retrieved 23-page PDF, including the scalar equation in §3, Eq. (3.6), and its full-plane and flux/decay treatments. In the $N=1$ scalar equation, the coefficient is $e^2v^2/2$; comparing it with this batch's $\kappa=2e^2\xi$ uses $v^2=4\xi$. That paper's variational proof is context, not a replacement for the local proofs here.
- Clifford Taubes, “Arbitrary N-vortex solutions to the first order Ginzburg-Landau equations,” is retained by the assigned item for theorem attribution only. Its current source metadata says the publisher abstract/metadata were inspected but the proof text was not retrieved. I did not read that proof, and no local proof step is attributed to it.

## Repair and evidence

In [lem-qftx-taubes-disk-barriers-and-monotone-iteration.md](../items/lem-qftx-taubes-disk-barriers-and-monotone-iteration.md:61), the Statement used “distributional subsolution” and “supersolution” without specifying the distributional sign convention. It also used a “positive zero-Dirichlet resolver” without defining its weak action, and the formula for $v_0=u_--u_{s,R}$ left the center values undefined before the logarithmic cancellation was mentioned in the proof.

I repaired the Statement by writing the nonnegative-test distribution inequalities, defining the resolvent through its weak equation and positivity property, specifying the smooth zero extension of $A_R$, specifying the smooth cancellation extension of $v_0$, and stating the $L^2$ domain on which $G_R$ is defined. The proof already established each property. I updated the batch-62 proof contract to record the revised statement interface and corrected its stale “steps 1.1–8.1” reference to the actual final step 7.1. The item has no `verification.judge` record, so there was no stale judge record to remove.

After the final edit:

- Reflow: unchanged.
- Precheck: passed, 1 checked and 0 failing.
- Proof layout: 1 item, 10 steps, 0 defects.
- The updated proof-contracts JSON parses successfully.

No TikZ or tikzcd diagrams occur in the six assigned items; their analytic exposition does not require a diagram.

## Page verdicts

- `qftx-abelian-higgs-vortex-existence-mathematics` — **pass**. Draft mathematics classification and compact layout are consistent. Its five items are in dependency order; its 13 listed mathematics-page prerequisites match the current batch manifest; and the page body is empty.
- `qftx-abelian-higgs-vortex-existence-mathematics-examples` — **pass**. Draft mathematics classification and compact layout are consistent. It contains the single assigned example, requires its A-page companion, and has an empty body.

## Uneditable findings and blockers

None. No published dependency defect was confirmed. No blocker remains.

## Coverage limitation

I checked the direct mathematical supplier statements and the hypotheses used by this batch, but did not independently audit the full transitive proofs of every published mathematical supplier. The cited Taubes article proof remains unread, as stated above; the assigned local proof does not rely on it. Tong and Chen–Yang are cited for model, normalization, flux, and related context, while the existence, boundary-current, and cylinder arguments are proved locally.
