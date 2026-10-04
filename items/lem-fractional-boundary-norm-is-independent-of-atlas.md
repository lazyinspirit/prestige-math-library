---
id: lem-fractional-boundary-norm-is-independent-of-atlas
kind: lemma
title: "Chart independence of the fractional boundary norm"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-fractional-sobolev-space-on-a-compact-c-one-boundary, def-fractional-slobodeckij-space-on-euclidean-space, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, def-bounded-c-k-domain-and-boundary-charts, cor-piecewise-c1-paths-have-additive-speed-integral-length, cor-chord-length-is-at-most-arc-length, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-slobodeckij-seminorm-is-well-defined]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 1, printed pp. 287-289 and footnote 6: bi-Lipschitz maps with bounded Jacobians induce norm equivalence, and the norm (1.3) is independent of the local system."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, Theorems 3.4-3.5, printed pp. 27-31: chartwise norms patched over finitely many Lipschitz diffeomorphisms."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.1, printed pp. 96-97: the boundary case is treated through charts, with invariance under bi-Lipschitz changes of variables implicit in the trace-space definition."
---

## Statement

Assume Countable Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded
$C^1$ domain, $0<s<1$ and $1\le p<\infty$.

(i) If $\Psi:V\to V'$ is a $C^1$ diffeomorphism between open subsets of
$\mathbb R^{d}$, $d\ge1$, which is bi-Lipschitz and whose derivatives in both directions are bounded,
then for every measurable $u:V'\to\mathbb K$,
$$\|u\circ\Psi\|_{W^{s,p}(V)}\le C(\Psi,s,p)\,\|u\|_{W^{s,p}(V')}$$
and symmetrically with $\Psi^{-1}$; in particular the Slobodeckij norm
$\|\cdot\|_{W^{s,p}}$ of [[def-fractional-slobodeckij-space-on-euclidean-space]]
is preserved up to equivalence by such coordinate changes. Here the norm on an open set uses the same double integral restricted to that set, with its $L^p$ term. Bounded derivatives alone on arbitrary open sets do not imply the bi-Lipschitz hypothesis.

(ii) Consequently two finite boundary chart families with subordinate
partitions, as in
[[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], define
equivalent norms on $\partial\Omega$: the sum norms differ by multiplicative
constants depending only on the two atlases, the dimension and $s,p$, so
$W^{s,p}(\partial\Omega)$ is well defined as a set and its topology is
atlas-independent.

## Facts & Assumptions

**Given:** Countable Choice; a bounded $C^1$ domain $\Omega$, $0<s<1$, $1\le p<\infty$, and the boundary space of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]].

[F1] The Euclidean seminorm is $[g]_{s,p}=(\int\int|g(\xi)-g(\eta)|^p|\xi-\eta|^{-d-sp}d\xi d\eta)^{1/p}$ with the diagonal read as $0$, an extended nonnegative integral; the norm is the sum of the $L^p$ norm and the seminorm. ([[def-fractional-slobodeckij-space-on-euclidean-space]])

[F2] Assume Countable Choice. If $T:U\to V$ is a $C^1$ diffeomorphism between open subsets of $\mathbb R^m$ and $f:V\to[0,\infty]$ is Lebesgue measurable, then $\int_Vf\,d\lambda_m=\int_Uf(T(x))|\det DT(x)|\,d\lambda_m(x)$. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F3] A continuous path that is differentiable on the pieces of a finite partition with continuous derivatives is rectifiable, its length equals the integral of the speed, and its chord is at most its length. ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]], [[cor-chord-length-is-at-most-arc-length]])

[F4] A bounded $C^k$ domain has flattening charts $\Phi:W\to B\times\mathbb R$, $\Phi(p)=(y,s-h(y))$, and for every compactly contained concentric ball the derivatives through order $k$ of $\Phi$ and $\Phi^{-1}$ are bounded on the corresponding compact patch. ([[def-bounded-c-k-domain-and-boundary-charts]])

[F5] The boundary space is the set of $L^p(\partial\Omega)$ classes whose chart representations $(\chi_jg)\circ\Psi_j^{-1}$ have finite sum of Euclidean $W^{s,p}$ norms, taken over a finite boundary atlas with a subordinate finite ambient partition; the sum norm is the one displayed there. ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F6] Polar coordinates compute the radial integrals used below. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F7] A finite open cover of a compact Euclidean set admits a subordinate smooth partition equal to one near that set. ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]])

[F8] The Euclidean fractional norm satisfies the triangle inequality. ([[lem-slobodeckij-seminorm-is-well-defined]])

## Proof

**Proof technique:** direct.

1.1 The distance hypothesis. By the bi-Lipschitz hypothesis choose $L,M>0$ such that $M^{-1}|x-y|\le|\Psi(x)-\Psi(y)|\le L|x-y|$ for all $x,y\in V$. These inequalities are assumed for arbitrary open sets; no convexity of $V$ or $V'$ is inferred. On a sufficiently small ball around a point where $D\Psi$ is invertible, such inequalities follow by integrating $D\Psi-D\Psi(x_0)$ on segments and using continuity to make that difference smaller than half the least stretching of $D\Psi(x_0)$. [F3, algebra, given]

1.2 Multiplication by a bounded Lipschitz function is bounded on $W^{s,p}$. Let $a$ be bounded and Lipschitz on $\mathbb R^d$ and $v$ measurable. Then $|a(x)v(x)-a(y)v(y)|^p\le2^{p-1}\bigl(|a(x)|^p|v(x)-v(y)|^p+|a(x)-a(y)|^p|v(y)|^p\bigr)$, and with $\|a\|_\infty$ and $[a]_{\mathrm{Lip}}$ the two bounds, integrating against $|x-y|^{-d-sp}dx\,dy$ gives $[av]_{s,p}^p\le2^{p-1}\bigl(\|a\|_\infty^p[v]_{s,p}^p+[a]_{\mathrm{Lip}}^p\int_{|h|\le1}|h|^{p-d-sp}dh\int|v|^pd\xi+2^p\|a\|_\infty^p\int_{|h|>1}|h|^{-d-sp}dh\int|v|^p\bigr)$ by translating the second term in $x$ for fixed $y$. Both constants are finite because $p-sp>0$ for $s<1$ and $d+sp>d$; hence $[av]_{s,p}\le C(a,d,p,s)\bigl(\|v\|_{L^p}+[v]_{s,p}\bigr)$, and $\|av\|_{L^p}\le\|a\|_\infty\|v\|_{L^p}$, so $\|av\|_{W^{s,p}}\le C'(a,d,p,s)\|v\|_{W^{s,p}}$. [F1, F6, algebra]

2.1 Diffeomorphism invariance (i). Let $u$ be measurable on $V'$ and apply the bi-Lipschitz upper bound of step 1.1: $|x-y|^{-d-sp}\le L^{d+sp}|\Psi(x)-\Psi(y)|^{-d-sp}$, so $[u\circ\Psi]_{s,p}^p\le L^{d+sp}\int_V\int_V|u(\Psi x)-u(\Psi y)|^p|\Psi(x)-\Psi(y)|^{-d-sp}dx\,dy$. The map $\Theta:=\Psi\times\Psi:V\times V\to V'\times V'$ is a $C^1$ diffeomorphism of open subsets of $\mathbb R^{2d}$ with $|\det D\Theta(x,y)|=|\det D\Psi(x)||\det D\Psi(y)|$ and $\det D\Theta^{-1}(\xi,\eta)=\det D\Psi^{-1}(\xi)\det D\Psi^{-1}(\eta)$; the change-of-variables theorem [F2] applied to the nonnegative measurable integrand $f(\xi,\eta):=|u(\xi)-u(\eta)|^p|\xi-\eta|^{-d-sp}$ yields $\int_{V\times V}f(\Theta(x,y))\,dx\,dy=\int_{V'\times V'}f(\xi,\eta)|\det D\Psi^{-1}(\xi)|\,|\det D\Psi^{-1}(\eta)|\,d\xi\,d\eta\le M^{2d}\int_{V'\times V'}f$, where $M$ also bounds $|\det D\Psi^{-1}|\le M^d$ after enlarging the constant. For the $L^p$ term, [F2] applied in the form $\int_V|u(\Psi x)|^pdx\le M^d\int_{V'}|u|^p$ gives $\|u\circ\Psi\|_{L^p(V)}\le M^{d/p}\|u\|_{L^p(V')}$. Adding the two bounds, $\|u\circ\Psi\|_{W^{s,p}(V)}\le C(\Psi,s,p)\|u\|_{W^{s,p}(V')}$; exchanging $\Psi$ and $\Psi^{-1}$ gives the symmetric inequality. [F1, F2, step 1.1, algebra]

3.1 Chart independence (ii). Let two atlases and partitions be as in [F5]. For each pair $j,k$, the support of $\chi_j\chi'_k$ on the boundary is compact inside the chart overlap. Cover it by finitely many small coordinate balls whose slightly larger closures remain in that overlap. Step 1.1 makes each transition bi-Lipschitz on those larger balls; its Jacobians and inverse Jacobians are bounded there by [F4]. Choose a finite smooth coordinate partition equal to one near this compact support. On each piece, the identity $(\chi_j\chi'_kg)\circ\Psi_j^{-1}=((\chi'_kg)\circ(\Psi'_k)^{-1})\circ(\Psi'_k\circ\Psi_j^{-1})\, (\chi_j\circ\Psi_j^{-1})$ and steps 1.2 and 2.1 control the norm restricted to the ball. All multiplier factors are bounded Lipschitz there; multiplying by the coordinate cutoff extends them by zero to bounded Lipschitz functions on $\mathbb R^d$. The localised function is supported a positive distance $\delta$ from the ball's complement, so the extra cross term in its zero-extension seminorm is at most $C\delta^{-sp}\|v\|_p^p$, obtained by integrating $|h|^{-d-sp}$ over $|h|\ge\delta$. Thus its whole-space norm is bounded by the second atlas norm. Sum over the finite pieces and use $\sum_k\chi'_k=1$ to obtain the first atlas norm bounded by the second. Exchange the atlases for the reverse inequality. [F1, F2, F4, F5, F6, F7, F8, step 1.1, step 1.2, step 2.1, algebra, given] ∎

## Source notes

Gagliardo's footnote 6 and discussion on printed pp. 287-289 records that bi-Lipschitz maps with bounded Jacobians induce norm equivalence for the boundary spaces and that the norm does not depend on the local system; Kampanou's Theorems 3.4-3.5 (printed pp. 27-31) patches chartwise norms over finitely many Lipschitz diffeomorphisms. The general coordinate-change assertion assumes bi-Lipschitz distance bounds. The atlas comparison obtains these on sufficiently small overlap balls and accounts for the zero-extension cross terms using compact support margins; it does not infer global convexity of chart overlaps.
