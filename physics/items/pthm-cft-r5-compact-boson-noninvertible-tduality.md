---
id: pthm-cft-r5-compact-boson-noninvertible-tduality
kind: physics-theorem
title: Noninvertible T-duality defect for the compact boson
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: physics
library: physics
physical_scope: Conditional topological-defect construction in the idealized compact-boson two-dimensional QFT under the stated
  flat-gauging/SymTFT assumptions.
deps:
- def-cft-r5-compact-boson-full-theory
- def-fusion-and-multifusion-category
- def-cft-r5-compact-boson-charge-lattice-and-cocycle
- lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
- def-cft-r5-topological-defect-interface-conventions
- def-cft-r5-finite-gauging-wall-conventions
- pthm-cft-r5-finite-gauging-wall-fusion
dependency_roles:
  def-cft-r5-compact-boson-full-theory: mathematical-premise
  def-fusion-and-multifusion-category: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
  def-cft-r5-topological-defect-interface-conventions: operational-prerequisite
  def-cft-r5-finite-gauging-wall-conventions: operational-prerequisite
  pthm-cft-r5-finite-gauging-wall-fusion: physical-result
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Riccardo Argurio, Andrés Collinucci, Giovanni Galati, Ondrej Hulik, and Elise Paznokas, Non-Invertible T-duality
      at Any Radius via Non-Compact SymTFT, arXiv:2409.11822v1
    url: https://arxiv.org/pdf/2409.11822v1
    locator: §§2.2–3.1, especially equations (3.9)–(3.22), and §4.2, equations (4.19)–(4.25), pp. 7–21. Section 3.1 identifies the rational discrete construction only up to normalization; §4.2 discusses its separate modular-bootstrap normalization.
  - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
    url: https://arxiv.org/pdf/hep-th/9108028v1
    locator: §8.1, momentum-winding charges and weights; §8.7, radius duality.
  - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
    url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
    locator: §§6.1.5–6.1.6, printed pp. 198–200, momentum-winding sectors and radius convention.
  - title: Argurio, Galati, and Godechal, Lattice Realizations of Flat Gauging and T-duality Defects at Any Radius, arXiv:2604.09126v1
    url: https://arxiv.org/pdf/2604.09126v1
    locator: §§2–2.1, 3.4, and 4.3–4.4, lattice/Hamiltonian realization and noncompact edge modes.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Under the source's compact-boson and gauging conventions, gauging $U(1)_w$ with flat connections and then the period-$2\pi/R$ subgroup $\mathbb Z\subset\mathbb R$ gives a topological radius-changing interface $I_R:C_R\to C_{1/R}$. Composing it with the invertible radius-duality interface $U_{1/R\to R}:C_{1/R}\to C_R$ gives the endodefect $N_R=U_{1/R\to R}\circ I_R:C_R\to C_R$. Here $R>0$ is the dimensionless radius in Argurio et al.'s convention. It is related to the local Ginsparg convention by $R=\sqrt2\,r$, so $R=1$ corresponds to $r=1/\sqrt2$. On a genuine primary $V_{n,w}$, $n,w\in\mathbb Z$, the source-reported charge-label action of this defect, up to a nonzero overall normalization, is
$$N_R:V_{n,w}\longmapsto\begin{cases}V_{R^2w,\,n/R^2},&R^2w\in\mathbb Z\text{ and }n/R^2\in\mathbb Z,\\ \text{a non-genuine defect endpoint},&\text{otherwise}.\end{cases}$$
For $R^2=p/q$ in lowest positive terms, with $p,q\in\mathbb Z_{>0}$ coprime, the finite anomaly-free gauging subgroup is $G_R\cong\mathbb Z_p\times\mathbb Z_q$ and has order $pq$. For the exact rational fusion claim, assume the $G_R$-generated line sector is finite semisimple with the group lines pairwise non-isomorphic simples, and choose the rational normalization $N_R=U_R\circ W_{G_R}$, where $W_{G_R}:C_R\to C_R/G_R$ is the standard endpoint-framed finite gauging wall and $U_R:C_R/G_R\to C_R$ is the selected invertible self-duality interface. No extra scalar is included in this definition. The source identifies its two-step and finite-rational constructions only up to normalization; this item adopts the finite-wall normalization at rational radii and does not claim that the source proves the exact scalar match. Under the self-duality identification of the group lines with $g_{a,b}V_{n,w}=e^{2\pi i(an/p+bw/q)}V_{n,w}$,
$$N_R\otimes\bar N_R\cong\bigoplus_{g\in G_R}g.$$
For the operator interpretation let $\mathcal V_R=\bigoplus_{(n,w)\in\mathbb Z^2}\mathbb C V_{n,w}$ be the algebraic primary-label space. Write $\rho(g_{a,b})\in\operatorname{End}_{\mathbb C}(\mathcal V_R)$ for the displayed phase action, and interpret the direct-sum line by the sum of these actions. Its operator is $pqP_{p,q}$, where $P_{p,q}=(pq)^{-1}\sum_{a,b}\rho(g_{a,b})$ is the projection onto the span of labels with $p\mid n,\ q\mid w$. Thus the defect is noninvertible for every $R\ne1$; at $R=1$ it is the invertible T-duality automorphism. No absolute fusion coefficient for irrational $R^2$ is asserted.

This is a conditional physics deduction. The two-step flat-gauging/SymTFT construction and its rational self-duality identification are stated inputs below, not consequences of the compact-boson operator algebra alone.

## Statement references

[[def-cft-r5-compact-boson-full-theory]]

[[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]

[[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]]

[[def-fusion-and-multifusion-category]]

[[def-cft-r5-topological-defect-interface-conventions]]

[[def-cft-r5-finite-gauging-wall-conventions]]

[[pthm-cft-r5-finite-gauging-wall-fusion]]

[Argurio et al., §§2.2–3.1, 4.2](https://arxiv.org/pdf/2409.11822v1)

[Ginsparg, §§8.1, 8.7](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, §§6.1.5–6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

[Argurio–Galati–Godechal, §§2–2.1, 3.4, 4.3–4.4](https://arxiv.org/pdf/2604.09126v1)

## Facts & Assumptions

**Given:** A dimensionless radius $R>0$, the compact-boson full-local-CFT data at $r=R/\sqrt2$, its genuine primary labels $(n,w)\in\mathbb Z^2$, and the adopted source gauging construction.

[F1] [[def-cft-r5-compact-boson-full-theory]]: in the Ginsparg convention $p_L=n/(2r)+wr$, $p_R=n/(2r)-wr$, and $h=p_L^2/2+N_{\rm osc}$, $\bar h=p_R^2/2+\bar N_{\rm osc}$, with nonnegative integral oscillator levels.

[F2] [[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]: the genuine charge labels are $(n,w)\in\mathbb Z^2$, and in this local normalization the vertex cocycle is $\varepsilon((n,w),(n',w'))=(-1)^{nw'}$.

[F3] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]]: the supplier proves the vertex OPE/locality identities and the radius-duality OPE automorphism with charge swap and phase $(-1)^{nw}$.

[F4] [[def-cft-r5-topological-defect-interface-conventions]]: an interface and an endodefect have the stated domain/codomain distinction; invertibility means having a two-sided fusion inverse. Dragging a local field across an invertible endodefect gives a linear bijection of the genuine local-field space, with inverse given by dragging across its inverse line.

[F5] [[def-fusion-and-multifusion-category]]: a fusion category is finite semisimple. For the rational subgroup only, [A2] assumes that the subcategory generated by the $G_R$ symmetry lines is such a category and that its $pq$ specified lines are pairwise non-isomorphic simple objects. No finite-fusion-category claim is made for the irrational-radius continuous construction.

[F6] [[def-cft-r5-finite-gauging-wall-conventions]]: the finite gauging is untwisted and its framed flat-bundle groupoid is weighted by $1/|\operatorname{Aut}|$; an interval sector with relative holonomy $g$ and fixed endpoint trivializations has no nonidentity endpoint-preserving automorphism and hence has weight one.

[F7] [[pthm-cft-r5-finite-gauging-wall-fusion]]: under its finite semisimple line-sector and pairwise-distinct-simple-line hypotheses, fusing the gauging wall and its reverse gives one copy of each group line indexed by the finite group.

[A1] Adopt the source's noncompact SymTFT/two-step flat-gauging construction. First gauge $U(1)_w$ with flat connections, producing the noncompact intermediate scalar theory; then gauge the period-$2\pi/R$ subgroup $\mathbb Z\subset\mathbb R$ of its momentum-shift symmetry, producing the radius-changing topological interface $I_R:C_R\to C_{1/R}$. Compose with the standard invertible radius-duality interface $U_{1/R\to R}:C_{1/R}\to C_R$. The source identifies this composite as a topological line and gives its charge-label action on genuine and non-genuine vertex endpoints up to an overall prefactor. The functional-measure foundation and, for irrational $R^2$, an absolute normalization of this construction are not claimed as proved here.

[A2] For reduced rational $R^2=p/q$, with $p,q\in\mathbb Z_{>0}$ coprime, adopt the source's anomaly-free finite subgroup gauging and self-duality interface $U_R:C_R/G_R\to C_R$. Let $G_R=\{g_{a,b}:0\le a<p,\ 0\le b<q\}\cong\mathbb Z_p\times\mathbb Z_q$, acting by $g_{a,b}V_{n,w}=e^{2\pi i(an/p+bw/q)}V_{n,w}$, and assume $U_R$ maps each gauging symmetry line $L_{a,b}$ to this line $g_{a,b}$. Assume the $G_R$-generated topological-line subcategory is finite semisimple and the $g_{a,b}$ are pairwise non-isomorphic simple objects. Normalize the rational defect exactly as $N_R=U_R\circ W_{G_R}$, with $W_{G_R}:C_R\to C_R/G_R$ the endpoint-framed wall of [[def-cft-r5-finite-gauging-wall-conventions]]; there is no additional scalar. Argurio et al. §3.1, equation (3.20), identifies the continuous two-step and rational discrete constructions only up to normalization, and §4.2, equations (4.19)–(4.25), derives the group-line sum up to proportionality and states that modular-bootstrap/locality fixes the rational normalization. The exact finite-wall normalization here is therefore an explicit adopted rational input, not a claim that those source passages prove the scalar match. No continuous-gauging normalization is inferred.

## Proof

1.1 Set $r=R/\sqrt2$ in [F1]. Then the primary weights are $$h_{n,w}=\frac14\left(\frac nR+wR\right)^2,\qquad \bar h_{n,w}=\frac14\left(\frac nR-wR\right)^2.$$ The source field $V_{n,w}$ is the local lattice field with momentum label $n$ and winding label $w$. [given, F1, F2, algebra]

1.2 The first $U(1)_w$ gauging alone produces a noncompact scalar theory; after the second, period-$2\pi/R$ gauging, [A1] supplies the topological radius-changing interface $I_R:C_R\to C_{1/R}$. Composing with the standard invertible radius-duality interface $U_{1/R\to R}$ gives $N_R=U_{1/R\to R}\circ I_R:C_R\to C_R$, an endodefect. Its topologicality is adopted in [A1] under the convention [F4]. [given, A1, F4, algebra]

1.3 Let $R^2=p/q$ with $\gcd(p,q)=1$. Both output labels $n'=pw/q$ and $w'=qn/p$ are integers exactly when $q\mid w$ and $p\mid n$. For example, $q\mid pw$ implies $q\mid w$: choose integers $u,v$ with $up+vq=1$ and multiply by $w$; the converse divisibility and the corresponding $p\mid n$ statement follow by the same argument. Therefore the genuine-output sublattice is precisely the image selected by $P_{p,q}$. [given, A1, F2, algebra]

2.1 If the output labels in [A1] are integral, put $n'=R^2w$, $w'=n/R^2$. Then $n'/R+w'R=Rw+n/R$ and $n'/R-w'R=Rw-n/R=-(n/R-wR)$. Substitution in step 1.1 proves that $h$ and $\bar h$ are separately preserved; the oscillator levels are unchanged. Consequently the conformal spin $h-\bar h$ is preserved. [given, A1, step 1.1, algebra]

2.2 At $R=1$, the charge map is $A(n,w)=(w,n)$. The phase $\chi(n,w)=(-1)^{nw}$ makes it an OPE automorphism: using [F2], $$\chi(n,w)\chi(n',w')\varepsilon(A(n,w),A(n',w')) =\varepsilon((n,w),(n',w'))\chi(n+n',w+w'),$$ since both exponents agree modulo $2$. Its square is the identity because $A^2=1$ and $\chi(n,w)\chi(w,n)=1$. To verify line invertibility, take $p=q=1$ in [A2]: $G_R$ is trivial, its standard wall is the identity by [F6], and $U_R$ is an invertible self-duality interface. Hence $N_R=U_R$ is invertible, with the charge-swap action above. [given, A2, F2, F3, F6, step 1.1, algebra]

2.3 Define $P_{p,q}=(pq)^{-1}\sum_{a=0}^{p-1}\sum_{b=0}^{q-1}\rho(g_{a,b})$ on $\mathcal V_R$. On $V_{n,w}$, the two finite geometric sums are $p$ when $p\mid n$ and $0$ otherwise, and $q$ when $q\mid w$ and $0$ otherwise. Hence $P_{p,q}$ is the projection onto the genuine-output sublattice and $P_{p,q}^2=P_{p,q}$. By [A2], $N_R$ is the normalized composite of the gauging wall and the invertible self-duality interface. In the fusion $N_R\otimes\bar N_R$, the adjacent duality interfaces cancel, leaving the gauging wall fused with its orientation reverse; [F6] and [F7], using the finite semisimple line sector in [F5], give $N_R\otimes\bar N_R\cong\bigoplus_{a,b}g_{a,b}$. The sum of the induced operators on $\mathcal V_R$ is $pqP_{p,q}$. If $pq>1$, either $p>1$ and $P_{p,q}V_{1,0}=0$, or $p=1<q$ and $P_{p,q}V_{0,1}=0$. These are nonzero genuine local fields by [F2], so the fusion is not the identity. [given, A2, F2, F5, F6, F7, step 1.3, algebra]

3.1 If $R\ne1$ and $R^2=p/q$ is reduced, then $(p,q)\ne(1,1)$. If $p>1$, the genuine field $V_{1,0}$ maps by [A1] to label $(0,q/p)$, which is nonintegral; if $p=1$, then $q>1$ and $V_{0,1}$ maps to $(1/q,0)$, which is nonintegral. If $R^2$ is irrational, $V_{1,0}$ maps to $(0,1/R^2)$, also nonintegral. In each case a nonzero genuine local field is sent to a non-genuine endpoint, so the defect action does not map the local-field space to itself. If the endodefect were invertible, [F4] would give a bijection of that space, a contradiction. Thus the defect is noninvertible for every $R\ne1$. At $R=1$, step 2.2 proves invertibility. [given, A1, F2, F4, step 1.3, step 2.2, algebra] ∎

## Remarks

Argurio et al. §§3.1 and 4.2 give the two-step construction and charge action, but leave the absolute normalization of the irrational-radius fusion unresolved; they state that the continuous case requires a twisted-Hilbert-space analysis not supplied there. The rational coefficient is computed conditionally from the finite-gauging wall normalization [F6] and the finite-holonomy count [F7], with the source's rational self-duality identification [A2]. This item does not derive the continuous functional gauge-field integrals from a rigorously constructed continuum measure. Those are the exact unresolved proof obligations for Step 1 readiness.

The following string diagram is shorthand for the rational fusion rule: two oppositely oriented gauging lines fuse to the direct sum of the $pq$ group lines. The upward output denotes the direct-sum object; the vertex denotes fusion. It records the stated orientation and direct-sum channel convention only, and no proof step depends on it.

```latex
\begin{tikzpicture}[baseline=(current bounding box.center),scale=0.9]
  \draw (-0.5,0) -- (-0.5,0.32);
  \draw (0.5,0) -- (0.5,0.32);
  \node at (-0.5,0.12) {$N_R$};
  \node at (0.5,0.12) {$\bar N_R$};
  \draw (-0.5,0.32) -- (0,0.68);
  \draw (0.5,0.32) -- (0,0.68);
  \draw (0,0.68) -- (0,1.0);
  \node[right] at (0,0.86) {$\displaystyle\bigoplus_{g\in\mathbb Z_p\times\mathbb Z_q}g$};
  \node at (0,0.45) {$\otimes$};
\end{tikzpicture}
```

No claim identifies all irrational-radius defect families with a finite fusion category or with a Tambara–Yamagami category.

