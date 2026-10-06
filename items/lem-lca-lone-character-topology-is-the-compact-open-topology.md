---
id: lem-lca-lone-character-topology-is-the-compact-open-topology
kind: lemma
title: The character topology on L^1 of an LCA group is the compact-open topology
dependency_level: 4
deps:
- def-left-haar-integral-and-left-haar-measure
- lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
- lem-lca-translations-and-normalised-local-approximate-identities
- def-pontryagin-dual-and-compact-open-topology
- def-compact-open-topology-for-topological-domains
- lem-compact-open-character-group-operations-are-continuous
- def-topology-of-pointwise-convergence
- def-directed-set-and-net
- lem-character-evaluation-pairing-is-jointly-continuous
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-lca-lone-convolution-is-a-commutative-banach-star-algebra
- def-l-p-space-as-a-quotient-by-null-functions
- def-integrable-real-and-complex-functions-and-their-integrals
- thm-c-c-is-dense-in-l-p-for-radon-measures
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-compactness-variants
- thm-compactness-under-continuous-maps
- def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group
with Haar measure $m_G$ and $A=L^1(G,m_G)$. Under the bijection
$\gamma\mapsto h_\gamma$ of
[[lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations]],
the compact-open topology of $\widehat G$ is the topology of pointwise
evaluation on all of $A$: a net $(h_i)$ converges to $h_0$ in the topology of
pointwise convergence on $A$ if and only if the corresponding characters
converge to $\gamma_0$ uniformly on every compact subset of $G$. Consequently
the algebraically defined character space of $A$ carries exactly the
compact-open topology of $\widehat G$, and the resulting identification is a
homeomorphism.

## Facts & Assumptions

**Given:** Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, $A=L^1(G,m_G)$, the bijection $\gamma\mapsto h_\gamma(f)=\widehat f(\gamma)$ onto the nonzero multiplicative linear functionals ([[lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations]]), a net $(\gamma_i)_{i\in I}$ in $\widehat G$ with compact-open limit $\gamma_0$, and a net $(h_i)$ evaluating pointwise to $h_0$ on $A$ ([[def-directed-set-and-net]], [[def-topology-of-pointwise-convergence]], [[def-compact-open-topology-for-topological-domains]]).

[F1] $h_\gamma(T_xf)=\overline{\gamma(x)}\,h_\gamma(f)$ for all $x\in G$, $f\in A$: substituting $y\mapsto y-x$ (a translation, so $m_G$-preserving) gives $h_\gamma(T_xf)=\int_Gf(y-x)\overline{\gamma(y)}\,dm_G(y)=\int_Gf(z)\overline{\gamma(z+x)}\,dm_G(z)=\overline{\gamma(x)}\int_Gf(z)\overline{\gamma(z)}\,dm_G(z)$ ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]]).

[F2] $|h_\gamma(f)|\le\|f\|_1$, $C_c(G)$ is dense in $A$ and $x\mapsto T_xf$ is norm-continuous with $\|T_xf\|_1=\|f\|_1$ ([[lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[lem-lca-translations-and-normalised-local-approximate-identities]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-dependent-choice]]).

[F3] A continuous image of a compact set is compact ([[thm-compactness-under-continuous-maps]], [[def-compactness-variants]]); a compact subset of a metric space has a finite cover by balls of any prescribed radius, and $\|f\|_\infty\,m_G(K)<+\infty$ for compact $K$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F4] For an arbitrary abelian topological group, the sets $U_K(\gamma,r):=\{\eta:|\eta(x)-\gamma(x)|<r\text{ for every }x\in K\}$, with $K$ compact and $r>0$, form a neighbourhood basis in its compact-open dual. Thus compact-open convergence of characters is exactly uniform convergence on every compact set; no metrizability of $G$ or choice axiom is required ([[lem-compact-open-character-group-operations-are-continuous]], Statement and proof 1.2 and 2.1).

## Proof

**Proof technique:** direct.

1.1 (Compact-open convergence gives evaluation convergence.) Assume $\gamma_i\to\gamma_0$ in the compact-open topology; by [F4] this is uniform convergence on compacta. Fix $f\in A$, $\varepsilon>0$. By [F2] choose $f_0\in C_c(G)$ with $\|f-f_0\|_1<\varepsilon/3$ and put $K:=\operatorname{supp}f_0$. Then for every $i$, using [F2] and the definition of $h_\gamma$, $$|h_{\gamma_i}(f)-h_{\gamma_0}(f)|\le2\|f-f_0\|_1+\int_K|f_0(y)|\,|\gamma_i(y)-\gamma_0(y)|\,dm_G(y)\le\tfrac{2\varepsilon}{3}+\|f_0\|_\infty\,m_G(K)\sup_{y\in K}|\gamma_i(y)-\gamma_0(y)|,$$ and the supremum tends to $0$ along the net; hence $h_{\gamma_i}(f)\to h_{\gamma_0}(f)$ for every $f\in A$. [F2, F3, F4]

1.2 (Evaluation convergence gives compact-open convergence.) Conversely, assume $h_i\to h_0$ pointwise on $A$, say $h_i=h_{\gamma_i}$ and $h_0=h_{\gamma_0}$. Choose $f\in A$ with $h_0(f)\ne0$; then $|h_i(f)|\ge|h_0(f)|/2$ for all sufficiently large $i$. Let $K\subseteq G$ be compact and $\delta>0$. By [F2] the set $\{T_xf:x\in K\}$ is a continuous image of $K$, hence compact, so finitely many of its points $T_{x_1}f,\dots,T_{x_m}f$ cover it by $\delta$-balls; put $\eta_i:=\max_j|h_i(T_{x_j}f)-h_0(T_{x_j}f)|$, which tends to $0$ by pointwise convergence. For every $x\in K$, choosing $j$ with $\|T_xf-T_{x_j}f\|_1<\delta$ and using [F2] gives $|h_i(T_xf)-h_0(T_xf)|\le2\delta+\eta_i$, so $\sup_{x\in K}|h_i(T_xf)-h_0(T_xf)|\le2\delta+\eta_i$. [F2, F3]

2.1 (Uniform convergence of the characters.) By [F1], $h_i(T_xf)-h_0(T_xf)=\overline{\gamma_i(x)}h_i(f)-\overline{\gamma_0(x)}h_0(f)$ for every $x$. For large $i$ the denominator $h_i(f)$ satisfies $|h_i(f)|\ge|h_0(f)|/2>0$, and $$\overline{\gamma_i(x)}-\overline{\gamma_0(x)}=\frac{h_i(T_xf)-h_0(T_xf)+\overline{\gamma_0(x)}\bigl(h_0(f)-h_i(f)\bigr)}{h_i(f)} .$$ Taking suprema over $x\in K$ and using step 1.2 together with $h_i(f)\to h_0(f)$ gives $\sup_{x\in K}|\gamma_i(x)-\gamma_0(x)|\le2\bigl(2\delta+\eta_i+\|h_0(f)-h_i(f)\|\bigr)/|h_0(f)|$ eventually, which tends to $4\delta/|h_0(f)|$; since $K$ and $\delta>0$ are arbitrary, $\gamma_i\to\gamma_0$ uniformly on every compact subset of $G$, hence in the compact-open topology by [F4]. [F1, F4, step 1.2]

3.1 (The homeomorphism.) Steps 1.1 and 2.1 show that under the bijection $\gamma\mapsto h_\gamma$ the compact-open topology of $\widehat G$ corresponds exactly to the topology of pointwise convergence on $A$; thus the algebraically defined character space of $A$ carries the compact-open topology of $\widehat G$ and the identification is a homeomorphism. [step 1.1, step 2.1]

4.1 Together with the bijection of [[lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations]], steps 1.1 and 2.1 prove both implications of the stated equivalence, and step 3.1 records the homeomorphism. [step 1.1, step 2.1, step 3.1] ∎ 