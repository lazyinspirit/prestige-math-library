---
id: thm-gts-r4-04b-lagrangian-floer-strip-breaking-and-bubbling-contract
kind: theorem
title: Lagrangian Floer strip breaking and bubbling contract
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 8
deps:
  - def-countable-choice
  - lem-gts-transverse-strip-local-action-neck-and-end-estimates
  - lem-smooth-strip-compactness-away-from-energy-concentration
  - thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness
  - thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval
  - thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow
  - thm-cartans-magic-formula
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-j-holomorphic-disks-with-boundary-markings
  - def-gts-lagrangian-intersection-and-hamiltonian-chord-data
  - def-gts-lagrangian-chord-cappings-and-action
  - thm-gts-fixed-source-interior-gromov-compactness-with-sphere-bubbling
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-gts-transverse-strip-local-action-neck-and-end-estimates: mathematical-premise
  lem-smooth-strip-compactness-away-from-energy-concentration: mathematical-premise
  thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness: mathematical-premise
  thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval: mathematical-premise
  thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow: mathematical-premise
  thm-cartans-magic-formula: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-j-holomorphic-disks-with-boundary-markings: mathematical-premise
  def-gts-lagrangian-intersection-and-hamiltonian-chord-data: mathematical-premise
  def-gts-lagrangian-chord-cappings-and-action: mathematical-premise
  thm-gts-fixed-source-interior-gromov-compactness-with-sphere-bubbling: mathematical-premise
axiom_strength: Countable Choice inherited from the actual local compactness and smooth evolution suppliers.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Dietmar Salamon, Lectures on Floer Homology
      url: https://www.math.utoronto.ca/mgualt/Morse%20Theory/Salamon%20floer.pdf
      locator: §§1.1–1.3 and 3.1–3.3, printed pp. 3–13 and 25–35; periodic-orbit Floer action, compactness and gluing context only, not a Lagrangian-strip theorem. The source Hamiltonian sign is translated by H_source = −H; the Lagrangian action and actual strip compactness are supplied locally below.
    - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary conditions
      url: https://arxiv.org/pdf/1403.6139v2
      locator: §§1–3, disk and sphere bubbling, boundary rescaling, and no-neck energy; it does not treat inhomogeneous Floer strips
    - title: Aleksey Zinger, Compactness of J-holomorphic maps, arXiv:1706.00331v1
      url: https://arxiv.org/pdf/1706.00331v1
      locator: §§4–5, fixed-source interior rescaling only; it does not treat Lagrangian strip breaking
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume Countable Choice. Let $(X,\omega)$ be compact symplectic without boundary, let $L_0,L_1$ be compact embedded Lagrangians, and fix a smooth time-periodic Hamiltonian $H_t$ and compatible family $J_t$, independent of $s$. Let $u_i:\mathbb R\times[0,1]\to X$ be smooth finite-energy solutions of
$$\partial_su_i+J_t(u_i)(\partial_tu_i-X_{H_t}(u_i))=0,\qquad u_i(s,j)\in L_j,$$
with fixed nondegenerate asymptotic Hamiltonian chords $x_\pm$, capped/reference-path data on the relevant covering, and a uniform bound on $E(u_i)=\int|\partial_su_i|_{g_t}^2dsdt$, $g_t=\omega(\cdot,J_t\cdot)$.

For ALL these data and any sequence of longitudinal translations, a subsequence converges smoothly on compact strip subsets away from finitely many concentration points to a smooth finite-energy strip with finite attached disk/sphere bubble trees. The bubbles are actual rescaled limits, their node values match, and the energy identity holds on bounded regions whose artificial vertical edges avoid the concentration points. Constant bubbles obey finite-automorphism stability. This local conclusion does not assert a finite global broken building when other chords are degenerate.

If, in addition, EVERY Hamiltonian chord in the specified path-space component for this fixed $H$ is nondegenerate, there is a subsequence converging modulo longitudinal translations to a FINITE broken strip building with all disk and sphere bubbles recorded. Consecutive strip levels have the same intermediate chord, the outer chords are $x_\pm$, all nodes match in $X$ and boundary nodes in the relevant Lagrangian, and
$$\lim_iE(u_i)=\sum_\ell E(u_\ell)+\sum_v\int u_v^*\omega.$$
Strip levels may be constant if they carry positive-energy bubbles; each retained level has positive total energy unless the entire sequence is constant. No energy or image diameter remains on the conjugated necks between levels or on their outer tails, and the level/bubble counts are uniformly bounded. In original coordinates necks converge to the matching Hamiltonian chord. With $\iota_{X_{H_t}}\omega=-dH_t$, every strip energy is its action drop on the capping cover, using the stated cap convention. No regularity, bubble exclusion, gluing or A-infinity identity is asserted.

## Statement references

[[def-gts-lagrangian-chord-cappings-and-action]]

[[lem-gts-transverse-strip-local-action-neck-and-end-estimates]]

## Facts & Assumptions

**Given:** Exactly the compact Hamiltonian data and bounded-energy sequence in the Statement. Nondegeneracy of all chords in the relevant component is used only in the explicitly separated finite-building branch, not in the universal local branch.

[F1] The Hamiltonian and cap conventions give $d\mathcal A_H(x)[\xi]=-\int\omega(\xi,\dot x-X_{H_t})dt$. Nondegeneracy of a chord is transversality of its flowed tangent boundary spaces. [[def-gts-lagrangian-intersection-and-hamiltonian-chord-data]] [[def-gts-lagrangian-chord-cappings-and-action]]

[F2] Compactly supported smooth time-dependent fields have smooth global evolution on a compact time interval. Differentiation of pulled-back forms and Cartan's formula apply to that evolution. On compact $X$ every smooth field has the required common compact support. [[thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval]] [[thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow]] [[thm-cartans-magic-formula]]

[F3] The actual fixed-strip local compactness theorem gives convergence off finitely many atoms for smooth source-dependent almost-complex coefficients and fixed totally real physical boundaries. The local proof of the actual bordered bubble-tree theorem resolves each interior/boundary atom, with matching, actual rescalings, stability, positive bubble quantum and no-neck energy/diameter. No condition at artificial vertical edges is used in that local construction. [[lem-smooth-strip-compactness-away-from-energy-concentration]] [[thm-countable-choice-totally-real-boundary-gromov-bubble-tree-compactness]]

[F4] The preceding local-action lemma gives exponential ends, a uniform positive strip energy gap and finite/semi-infinite neck collapse for arbitrary smooth compatible $J_t$ and compact transverse Lagrangians. It assumes NO exact integrable generator charts. [[lem-gts-transverse-strip-local-action-neck-and-end-estimates]]

[F5] Disk/sphere trees use the corrected marked/prestable/stable component convention, with matched Lagrangian labels. The strip's principal component is separate from its attached bubble stability. [[def-gts-stable-j-holomorphic-disks-with-boundary-markings]]

[A1] Countable Choice is used through the actual local analytic suppliers and their diagonal extractions. [[def-countable-choice]]

## Proof

1.1 Let $\phi_t$ be the time-dependent evolution of $X_{H_t}$ with $\phi_0=\mathrm{id}$, global by [F2]. Its symplectic preservation follows with the PHYSICS sign convention: $\frac d{dt}\phi_t^*\omega=\phi_t^*(d\iota_{X_{H_t}}\omega+\iota_{X_{H_t}}d\omega)=\phi_t^*(-d^2H_t)=0$. Thus no opposite-sign Hamiltonian definition is imported. Put $v_i(s,t)=\phi_t^{-1}u_i(s,t)$ and $\widetilde J_t=(D\phi_t)^{-1}J_tD\phi_t$. Differentiation gives $(v_i)_s+\widetilde J_t(v_i)(v_i)_t=0$ with boundaries $K_0=L_0$ and $K_1=\phi_1^{-1}L_1$. The structures remain compatible, and their boundary values at $t=0,1$ are fixed independently of $s,i$. Their compatible metric $\widetilde g_t=\omega(\cdot,\widetilde J_t\cdot)$ is the pullback of $g_t$, so $$E(u_i)=\int|(v_i)_s|_{\widetilde g_t}^2dsdt=\int v_i^*\omega.$$ This equality is pointwise: $(v_i)_t=\widetilde J_t(v_i)(v_i)_s$. Fixed background Dirichlet energies are uniformly comparable with this energy on compact $[0,1]\times X$. [F1, F2, given, construct, algebra]

2.1 Apply [F3] to any translated sequence $v_i(s+a_i,t)$. Longitudinal translation preserves its exact equation and boundary coefficients. Uniform background-energy comparison supplies its required bound, and hence a finite global atom set and smooth local limit off it. The local puncture filling and actual disk/sphere rescalings in [F3] resolve every atom into a finite tree. Interior bubbles solve the autonomous $\widetilde J_\tau$ equation at their original transverse coordinate $\tau$; physical boundary bubbles have boundary on $K_0$ or $K_1$. Every original Floer bubble is $\phi_\tau$ composed with that bubble, since $\phi_{t_i+\rho_iT}\to\phi_\tau$ smoothly in the rescaling. It is consequently $J_\tau$-holomorphic and has the required original Lagrangian boundary when applicable. Symplectic preservation keeps its area unchanged and matches its value with the transformed base node. [F3, F5, step 1.1, construct, algebra]

2.2 For the finite-building branch, chords correspond bijectively to $p\in K_0\cap K_1$ via $x_p(t)=\phi_t(p)$. Flow conjugation identifies the specified path component with one homogeneous-boundary component. The intersection subset whose constant paths belong to that component is compact, and nondegeneracy makes it transverse and finite, by the component extension in [F4]. Degeneracy outside the relevant component is allowed. Apply [F4] to the homogeneous conjugated equation; all hypotheses of its relevant-component form now hold for arbitrary $\widetilde J_t$. Fix a uniform $\delta>0$ below its small-window threshold. Pass to a subsequence whose total energies converge. If infinitely many maps are constant conjugated generators, fix that generator by a subsequence; all required conclusions are immediate. Otherwise every $v_i$ is nonconstant and $$B_i=\{s:E(v_i;[s-2,s+2]\times[0,1])\ge\delta\}$$ is a nonempty compact set: window energy is continuous, tends to zero at both ends by integrability, and emptiness would force constancy by [F4]. [F1, F4, step 1.1, construct, algebra]

3.1 The energy identity here is the actual Floer/area identity, not only a comparable fixed-metric estimate. Around an atom at transverse coordinate $\tau$, replacing $\widetilde g_t$ by $\widetilde g_\tau$ changes the energy integral by at most $Cr$ times the bounded background energy in a radius-$r$ patch. This tends to zero as the patch shrinks. The root local tree identity in that frozen metric is its $\omega$-area identity for autonomous compatible bubbles; away from the atom, the base energy densities converge smoothly. Finite patch partition and shrinking therefore give precisely Floer base energy plus bubble areas on every bounded region with atom-free artificial edges. The same uniform comparison transfers zero neck energy/diameter. This proves the entire universal local branch for all original inputs, without any condition on other chords. [F3, step 1.1, step 2.1, construct, algebra]

3.2 Starting from the least point of $B_i$, repeatedly select its least remaining point at least four units to the right. The selected length-four windows have disjoint interiors, each energy at least $\delta$, so there are at most $\lfloor E_0/\delta\rfloor$ centers. Their rightward intervals of length four cover $B_i$ by the selection rule. Pass to a fixed count and then, for every successive center difference, a subsequence on which it stays bounded or tends to infinity. Group centers joined by bounded differences. Let $q_{\ell,i}$ be the first center of each group. Adjacent group translations diverge, and for some fixed $A>4$, every bad center lies in an inner core $(q_{\ell,i}-A+2,q_{\ell,i}+A-2)$. There are uniformly finitely many groups. [step 2.2, construct, algebra]

4.1 At each group translation apply the fully proved local construction of steps 2.1–3.1 on a countable exhaustion of the strip. This gives a finite-energy strip $v_\ell$ with globally finitely many sphere/disk trees and actual rescalings, matching and stability. Finitely many subsequences retain all levels together. Each level has positive total energy at least $\delta$: its selected central window has at least that energy, and a larger fixed core with atom-free vertical edges captures it under the exact local energy identity. This does not assume energy convergence across an atom or discard a constant base carrying bubbles. [F3, F5, step 2.1, step 3.1, step 3.2, construct, algebra]

5.1 In every gap $[q_{\ell,i}+A,q_{\ell+1,i}-A]$ and on both outer half-infinite tails, all length-four window centers have energy below $\delta$; all source buffers exist because the original strips are defined on the whole strip. Apply [F4]. For every fixed $R>A+1$ and all large $i$, the energy outside disjoint cores $[q_{\ell,i}-R,q_{\ell,i}+R]$ is at most $CM\delta e^{-c(R-A)}$, where $M$ is the number of levels. On each central gap and outer tail, image diameter and distance from its one generator have the corresponding $C\sqrt\delta e^{-c(R-A)/2}$ bound. Fix those finitely many generator choices by a subsequence. The positive end of $v_\ell$ and the negative end of $v_{\ell+1}$ are this same generator, by passing those estimates to fixed translated coordinates and then sending them to infinity. The outer estimates give the original endpoint generators, since the original ends are $x_\pm$ after undoing conjugation. Thus every end matches; no concentration is silently discarded at an end. [F4, step 3.2, step 4.1, construct, algebra]

6.1 Choose $R\to\infty$ through radii whose vertical edges avoid every level's finite atom set. For each fixed $R$, add the finitely many exact local core energy identities from step 3.1. The omitted energy is bounded by step 5.1 and tends to zero as $R\to\infty$. Each base energy exhausts its strip and every finite atom eventually lies in a core. Hence $$\lim_iE(u_i)=\sum_\ell E(u_\ell)+\sum_v\int u_v^*\omega.$$ The same estimates give zero neck/tail diameter in conjugated coordinates. Returning by $\phi_t$ gives convergence to the matching Hamiltonian chord, rather than falsely asserting that an entire chord has zero diameter in $X$. Uniform positive bubble quanta from [F3] bound the nonconstant bubble count by total energy divided by that quantum; its finite-tree counting bounds the ghost count by three times that number. The level count was already bounded in step 3.2. [F3, F4, step 1.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Finally put $w=\partial_tu-X_{H_t}(u)$ on any original strip level. Its equation gives $\partial_su=-J_tw$, hence $|\partial_su|_{g_t}^2=\omega(\partial_su,w)$. By [F1], $\frac d{ds}\mathcal A_H([u(s,\cdot),\mathrm{cap}_s])=-\int|\partial_su|_{g_t}^2dt$. Integrate to its ends, which are exponentially convergent by [F4] on the finite branch (and by the same local chart argument at the two specified nondegenerate original ends). This gives exactly its action drop. Caps transported along individual levels give their lifts; adjacent lifts may differ by bubble classes, whose symplectic areas are precisely the bubble terms already retained in step 6.1. No reduction of coefficient rings, orientation/gluing, virtual Stokes or A-infinity conclusion is involved. [F1, F4, step 1.1, step 5.1, step 6.1, algebra] ∎

## Proof status

Both stated branches are proved from the actual local analytic suppliers and the new general-transverse local-action estimate. The earlier unconditional FINITE-building conclusion from only two nondegenerate endpoint chords was false: a fixed smooth compact Hamiltonian can have an infinite accumulating chain of degenerate intermediate chords, while fixed nondegenerate outer endpoints support a sequence requiring infinitely many positive-energy levels. The explicit compact-torus construction and ODE proof are recorded in the owner strip research note. The corrected theorem retains every original input for local translated compactness and retains the full finite-building/energy/action conclusion under the additional genuine nondegeneracy regime in its specified path component. No original input is excluded from the universal branch. No gluing or Fukaya/virtual-cycle construction is inferred.
