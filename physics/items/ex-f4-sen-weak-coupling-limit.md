---
id: ex-f4-sen-weak-coupling-limit
kind: example
title: "Sen weak-coupling limit as a type-IIB orientifold example"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: physics
library: physics
category: string-theory
deps:
  - post-f4-sevenbrane-monodromy-and-codimension-one-gauge
  - post-f4-type-iib-elliptic-fibration-dictionary
dependency_roles:
  post-f4-sevenbrane-monodromy-and-codimension-one-gauge: physical-assumption
  post-f4-type-iib-elliptic-fibration-dictionary: physical-assumption
physical_scope: "Source-specific formal weak-coupling limit in complex-structure moduli for Sen’s local one-parameter Weierstrass family. It is valid only on the stated local chart and away from the limiting discriminant for the asymptotic; it asserts no generic strong-coupling description or global compactification."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ashoke Sen, Orientifold Limit of F-theory Vacua, arXiv:hep-th/9702165v2"
      url: "https://arxiv.org/pdf/hep-th/9702165v2"
      locator: "§1, printed pp. 1–4; equations (4)–(8) and (18)–(20), the one-parameter family, discriminant factorization, weak-coupling asymptotic and D7/O7 orientifold data."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§§2.1–2.3, printed pp. 3–13, Weierstrass/j conventions, elliptic-fiber axiodilaton and the scope of the weak-coupling description."
verification:
  precheck: pass
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

Let $U\subset B_3$ be a complex coordinate polydisc with coordinates $(z_1,z_2,z_3)$, and trivialize the Weierstrass line bundle on $U$. Set $h=z_1$, $\eta=z_2$, and let $C\in\mathbb C^\times$ be a dimensionless complex parameter tending to zero. The coordinates $z_i$ are holomorphic base coordinates and are not assigned spacetime length units. In the resulting local Weierstrass family put

$$f_C=C\eta-3h^2,\qquad g_C=h(C\eta-2h^2),\qquad \Delta_C=4f_C^3+27g_C^2.$$

For $C\ne0$, the discriminant factors as $\Delta_C=C^2\eta^2(4C\eta-9h^2)$. On any fixed point with $h\eta\ne0$, the standard $j$ invariant satisfies

$$j_{\mathrm{std}}(\tau_C)\sim\frac{20736h^4}{C^2\eta^2}\qquad(C\to0).$$

On the weak-coupling branch near the modular cusp this gives $\operatorname{Im}\tau_C\to\infty$ and $g_s=(\operatorname{Im}\tau_C)^{-1}\to0$. The divisor $\eta=0$ is the doubled D7 locus. The two branches of $4C\eta-9h^2=0$ coalesce, after removing the nonzero overall factor $C^2$ in the degenerating discriminant, to the doubled divisor $h=0$, interpreted in Sen's limit as the O7 locus. The associated auxiliary orientifold double cover is $\widetilde U=\{(z,\xi):\xi^2=h(z)\}\to U$, with deck involution $\xi\mapsto-\xi$. Sen’s source-reported Type-IIB orientifold quotient uses $(-1)^{F_L}\Omega\sigma$, where $F_L$ is left-moving worldsheet fermion number, $\Omega$ reverses worldsheet orientation, and $\sigma$ is this deck involution.

The limit is formal and source-specific: at $C=0$ the Weierstrass discriminant section vanishes identically, so the $C=0$ member is not treated as an elliptic fibration with a discriminant divisor. This example does not describe generic strongly coupled F-theory vacua or establish a global compactification.

## Statement references

[[post-f4-type-iib-elliptic-fibration-dictionary]]

[[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]

## Facts & Assumptions

**Given:** The local chart and trivialization above; $C\ne0$ followed by the limit $C\to0$; Sen's specified one-parameter weak-coupling family; and the standard $j_{\mathrm{std}}$ convention of the A-page dictionary.

[A1] Sen's local model input is the family $f=C\eta-3h^2$, $g=h(C\eta-2h^2)$ with transverse simple zero divisors $h=0$ and $\eta=0$, no common component, and its source-reported weak-coupling/orientifold interpretation, including the selected cusp branch and the quotient $(-1)^{F_L}\Omega\sigma$. Sen's normalization is $j_S=8j_{\mathrm{std}}$; this source convention is not substituted for the A-page standard convention.

[F1] [[post-f4-type-iib-elliptic-fibration-dictionary]]: in a Weierstrass patch, $j_{\mathrm{std}}(\tau)=1728(4f^3)/(4f^3+27g^2)$, with $j_{\mathrm{std}}=q^{-1}+744+O(q)$ at the cusp and $\tau$ the type-IIB axiodilaton modulus.

[F2] [[post-f4-sevenbrane-monodromy-and-codimension-one-gauge]]: discriminant components are interpreted as 7-brane loci; the gauge-algebra clause additionally requires the stated transverse-slice, local-minimal-model, and splitness hypotheses. This example uses only the discriminant-locus interpretation, not a Kodaira gauge-algebra assignment.

## Proof

1.1 Substitution into the discriminant gives $$\begin{aligned}4f_C^3+27g_C^2&=4(C\eta-3h^2)^3+27h^2(C\eta-2h^2)^2\\&=4C^3\eta^3-36C^2\eta^2h^2+108C\eta h^4-108h^6+27C^2\eta^2h^2-108C\eta h^4+108h^6\\&=4C^3\eta^3-9C^2\eta^2h^2\\&=C^2\eta^2(4C\eta-9h^2).\end{aligned}$$ This is a direct polynomial identity; for $C\ne0$ it is not identically zero on $U$. [given, A1, algebra]

2.1 For each $C\ne0$, the divisor has the component $\eta=0$ with multiplicity two: at its generic point $h\ne0$, so the residual factor $4C\eta-9h^2$ is nonzero. The other component is $4C\eta-9h^2=0$. As $C\to0$, this residual equation tends to $-9h^2=0$, a doubled $h=0$ component. The overall $C^2$ is a nonzero scalar for each member with $C\ne0$ and is removed when taking the divisor limit; setting $C=0$ in $\Delta_C$ instead gives the zero section and no discriminant divisor. By [F2], discriminant components have the adopted 7-brane interpretation, and Sen's input [A1] assigns the doubled $\eta=0$ and limiting $h=0$ loci as D7 and O7 data. [given, A1, F2, step 1.1, algebra]

2.2 At fixed $h\eta\ne0$, $f_C\to-3h^2$ and $\Delta_C/C^2=\eta^2(4C\eta-9h^2)\to-9\eta^2h^2$. Therefore $$\lim_{C\to0}C^2j_{\mathrm{std}}(\tau_C)=1728\,\frac{4(-3h^2)^3}{-9\eta^2h^2}=20736\frac{h^4}{\eta^2}.$$ The limit is nonzero, so $|j_{\mathrm{std}}|$ diverges with the displayed $C^{-2}$ leading term. By Sen's selected cusp-branch input [A1], $|q|\to0$. The standard expansion in [F1] confirms cusp behavior; since $|q|=e^{-2\pi\operatorname{Im}\tau_C}$, $\operatorname{Im}\tau_C=-\frac{1}{2\pi}\log|q|\to+\infty$, and hence $g_s=(\operatorname{Im}\tau_C)^{-1}\to0$. This is conditional on that branch and away from $h\eta=0$. [given, A1, F1, step 1.1, algebra]

3.1 For fixed $\eta\ne0$, the two roots of the residual equation are $h=\pm\frac{2}{3}\sqrt{C\eta}$ after choosing a local square root; both tend to $h=0$ as $C\to0$. Its limiting equation is $h^2=0$, so the limiting divisor has multiplicity two. This is a local divisor calculation away from $h=\eta=0$; the O7 interpretation is Sen's source-specific physical input [A1]. [given, A1, step 2.1, algebra]

4.1 Define $\widetilde U=\{(z_1,z_2,z_3,\xi):\xi^2=z_1\}$ and $p(z,\xi)=z$. For $h=z_1\ne0$, the fiber has two points $\xi=\pm\sqrt h$; for $h=0$ it has one point $\xi=0$, where the derivative of $h=\xi^2$ vanishes. Thus $p$ is a double cover branched exactly on $h=0$. The map $\sigma(z,\xi)=(z,-\xi)$ satisfies $\sigma^2=\mathrm{id}$ and $p\circ\sigma=p$, so it is the deck involution. The quotient and its physical orientifold meaning remain Sen's adopted source input [A1]; the proof establishes the auxiliary cover and branch locus, not an orientifold theory or global model. [given, A1, step 2.1, algebra] ∎
## Remarks

The commutative diagram records only the explicitly checked double-cover maps: $p$ is projection, $\sigma$ is the deck involution, and both routes from $\widetilde U$ to $U$ agree because $p\circ\sigma=p$. It is a visual summary; the proof above establishes the fiber count, branch locus and identity without relying on the diagram.

```tikzcd
\begin{tikzcd}
\widetilde U \arrow[r,"\sigma"] \arrow[d,"p"'] & \widetilde U \arrow[d,"p"] \\
U \arrow[r,"\mathrm{id}_U"'] & U
\end{tikzcd}
```

Rendered commutative square: $$\begin{array}{ccc}\widetilde U&\xrightarrow{\sigma}&\widetilde U\\\downarrow p&&\downarrow p\\U&\xrightarrow{\mathrm{id}_U}&U\end{array}$$

The limit is taken with $h\eta\ne0$ held fixed for the $j$ asymptotic. The asymptotic does not control neighborhoods of either discriminant component, and the orientifold charge is not calculated here. Sen uses $j_S(i)=24^3$; since $24^3=8\cdot1728$, its $j_S$ is eight times the standard invariant used above. The expression $j_S$ is therefore only a source convention reconciliation, not a second physical normalization.
