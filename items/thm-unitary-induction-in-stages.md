---
id: thm-unitary-induction-in-stages
kind: theorem
title: "Induction in stages for closed subgroup chains"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, thm-unitary-induction-from-a-closed-subgroup, lem-composition-of-quotient-integrals-for-subgroup-chains, lem-compactly-supported-covariant-generators-are-dense, lem-the-induced-action-is-unitary, lem-closed-subgroup-quotient-averaging-and-compact-lifts, lem-compactly-supported-kernels-admit-commuting-radon-integrals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bekka–de la Harpe–Valette, Kazhdan’s Property (T), Appendices B and E"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Chapters 1 and 7"
      url: "https://ncatlab.org/nlab/files/Bruhat-LecturesOnLie.pdf"
    - title: "David Vogan, Unitary Representations of Locally Compact Groups and Induced Representations"
      url: "https://math.mit.edu/~dav/ind.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume AC. If $L\le H\le G$ are closed locally compact subgroups and $\sigma$ is a strongly continuous unitary $L$-representation, then $\operatorname{Ind}_L^G\sigma$ is canonically unitarily equivalent, after the selected rho and measure identifications, to $\operatorname{Ind}_H^G(\operatorname{Ind}_L^H\sigma)$.

## Facts & Assumptions

**Given:** AC, closed $L\le H\le G$, strongly continuous unitary $\sigma$ of $L$, and compatible rho-functions and quotient measures.

[F1] The quotient integration composition formula with density $r_x(hL)$ ([[lem-composition-of-quotient-integrals-for-subgroup-chains]]).

[F2] Induced Hilbert spaces have dense compactly supported covariant generators ([[lem-compactly-supported-covariant-generators-are-dense]]).

[F3] The induced group actions are unitary ([[lem-the-induced-action-is-unitary]]).

[F4] Compact quotient sets have compact lifts and compact-kernel integrals are continuous ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[lem-compactly-supported-kernels-admit-commuting-radon-integrals]]).

[A1] AC is the choice-function principle required by the stated hypothesis ([[def-axiom-of-choice]]).
## Proof

**Proof technique:** direct.

1.1 Write $\tau=\operatorname{Ind}_L^H\sigma$ and, for $F\in C_c(G,L;V)$, define $$(UF)(x)(h)=r_x(hL)^{1/2}F(xh),$$ using the continuous covariant representative on $H$ for the inner section. Since $r_x$ is right-$L$ invariant and $F(xhl)=\sigma(l)^{-1}F(xh)$, this is an $L$-covariant inner section. For $k\in H$, the identity $$r_{xk}(hL)=\frac{\rho_{HL}(kh)}{\rho_{HL}(h)}r_x(khL)$$ and the induced action formula show $UF(xk)=\tau(k)^{-1}UF(x)$. Its outer support is contained in the image in $G/H$ of the compact support of $F$ in $G/L$. To check continuity in the inner norm near $x_0$, choose a compact neighborhood $C$ of $x_0$ and a compact lift $K_0\subset G$ of the quotient support of $F$. If $x\in C$ and $xhL\in\operatorname{supp}_{G/L}F$, then $xh=zl$ for some $z\in K_0,l\in L$; hence $x^{-1}z=hl^{-1}\in H$ and $hL=x^{-1}zL$. The image in $H/L$ of the closed subset $\{(x,z)\in C\times K_0:x^{-1}z\in H\}$ is a fixed compact set containing all these inner supports. Lift that compact set to a compact subset of $H$. On this lift, continuity of the rho ratios and of $F$ gives uniform convergence as $x\to x_0$; its quotient measure is finite, so the inner $L^2$ norm also converges. Thus $UF$ belongs to the continuous outer model. [F1, F2, F4, construct, A1]
2.1 Apply [F1] to the continuous compactly supported scalar function $q\mapsto\|F(q)\|^2$. It gives $$\|UF\|^2=\int_{G/H}\int_{H/L}r_x(hL)\|F(xh)\|^2d\mu_{HL}d\mu_{GH}=\int_{G/L}\|F(q)\|^2d\mu_{GL}=\|F\|^2.$$ Hence $U$ extends to an isometry. The rho ratios also give $U\Pi_{GL}(g)=\Pi_{GH}(g)U$: after expanding both sides, the only required cancellation is $\rho_{GH}(g^{-1}xh)/\rho_{GH}(g^{-1}x)=\rho_{GH}(xh)/\rho_{GH}(x)$, which is exactly the rho covariance under $h\in H$. [F1, F3, step 1.1, algebra]
3.1 By [F2], outer generators $\Xi_f(v)(x)=\int_H f(xk)\tau(k)v\,dk$ with $f\in C_c(G)$ and $v\in W=\operatorname{Ind}_L^H\sigma$ have dense span. For fixed $f$, this generator depends continuously on $v$: choose a compact lift $C$ of $p_{GH}(\operatorname{supp}f)$; then $\|\Xi_f(v)(x)\|\le\|f\|_\infty dh(C^{-1}\operatorname{supp}f\cap H)\,\|v\|$, and its quotient support lies in the compact set $p_{GH}(\operatorname{supp}f)$. Since that set has finite measure, replacing $v$ by a dense inner compactly supported covariant section approximates $\Xi_f(v)$ in the outer norm. It therefore suffices to treat such $v$. The resulting $\Xi(x)$ has a continuous covariant representative $H\to V$, so evaluation at each $h\in H$ is defined. Outer covariance gives $$\Xi(xh)(e)=\left(\frac{\rho_{HL}(h)}{\rho_{HL}(e)}\right)^{1/2}\Xi(x)(h).$$ Set $F(y)=r_y(eL)^{-1/2}\Xi(y)(e)$. From the definition of $r$, $$r_{xh}(eL)=r_x(hL)\frac{\rho_{HL}(h)}{\rho_{HL}(e)},$$ so the displayed covariance identity gives $r_x(hL)^{1/2}F(xh)=\Xi(x)(h)$ for all $h\in H$. For $l\in L$, inner covariance gives $\Xi(y)(l)=\sigma(l)^{-1}\Xi(y)(e)$, and the same identities imply $F(yl)=\sigma(l)^{-1}F(y)$. The function $F$ is continuous: on a compact neighborhood of $y_0$, the $k$-integral defining $\Xi(y)(e)$ is supported in a fixed compact subset of $H$, and its integrand is jointly continuous, so [F4] applies. Its support modulo $L$ is compact: nonzero values require $yk\in\operatorname{supp}f$ and $k^{-1}L\in\operatorname{supp}v$, hence lie in the image of a product of compact lifts of these supports. Thus $F\in C_c(G,L;V)$ and $UF=\Xi$. The dense outer generators lie in the range, so the closed isometric range is the whole target. ∎ [A1, F1, F2, F3, F4, step 1.1, step 2.1]
## Sources

Bekka–de la Harpe–Valette, *Kazhdan’s Property (T)*, Appendix E §E.2, Theorem E.2.4, PDF pp. 416–419. The published proof is explicitly a sketch; this proof records the norm identity and dense-range argument.
