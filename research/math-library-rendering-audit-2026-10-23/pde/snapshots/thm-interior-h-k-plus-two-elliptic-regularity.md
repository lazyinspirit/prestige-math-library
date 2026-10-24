---
id: thm-interior-h-k-plus-two-elliptic-regularity
kind: theorem
title: "Interior $H^{k+2}$ elliptic regularity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-local-weak-solution-for-a-divergence-form-operator, lem-nested-domain-induction-for-interior-elliptic-derivatives, thm-interior-h-two-regularity-for-divergence-form-equations, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-uniformly-elliptic-divergence-form-operator, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Theorem 4.28, printed p. 114 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.8 (higher interior regularity), printed p. 111 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, let $k\ge0$, and let $L,a$ be as in
[[def-uniformly-elliptic-divergence-form-operator]] with
$a^{ij}\in W^{k+1,\infty}_{\mathrm{loc}}(\Omega)$,
$b^i,c\in W^{k,\infty}_{\mathrm{loc}}(\Omega)$, all derivatives bounded by
constants $M_\ell$; let $f\in H^k_{\mathrm{loc}}(\Omega)$ and let
$u\in H^1(\Omega)$ be a local weak solution of $Lu=f$
([[def-local-weak-solution-for-a-divergence-form-operator]]). Then
$u\in H^{k+2}_{\mathrm{loc}}(\Omega)$, and for all open sets
$\Omega'\Subset\Omega''\Subset\Omega$ there is
$C=C(n,\theta,k,M_0,\dots,M_{k+1},\Omega',\Omega'')$ with
$$\|u\|_{H^{k+2}(\Omega')}\le C\big(\|f\|_{H^k(\Omega'')}+\|u\|_{L^2(\Omega'')}\big).$$
The gain is exactly two derivatives; the coefficient regularity required is
one order above the data order. For $k=0$ the theorem reduces to
[[thm-interior-h-two-regularity-for-divergence-form-equations]]. The
scaffold wrote $\|f\|_{H^k(\Omega)}+\|u\|_{L^2(\Omega)}$ on the right-hand
side, which is ill-posed for locally Sobolev data on an unbounded $\Omega$;
the nested formulation is the well-posed local statement.

## Facts & Assumptions

**Given:** Countable Choice; the open set $\Omega$; the principal coefficient
bounds through order $k+1$ and lower-order coefficient bounds through order
$k$; the datum $f\in H^k_{\mathrm{loc}}(\Omega)$; and the local
weak solution $u\in H^1(\Omega)$.

[F1] Nested-domain induction: for every chain
$\Omega_{-1}\Supset\Omega_0\Supset\cdots\Supset\Omega_{k+1}$ with
$\overline{\Omega_{-1}}\Subset\Omega$, $\overline{\Omega_0}\Subset\Omega_{-1}$
and $\overline{\Omega_{j+1}}\Subset\Omega_j$, one has
$u\in H^{j+2}(\Omega_j)$ for $0\le j\le k$ with the quantitative bound of
that lemma.
([[lem-nested-domain-induction-for-interior-elliptic-derivatives]])

[F2] Sobolev restriction and nesting: regularity on an open set restricts to
every open subset, with non-increasing norms, and the compact inclusions of
a chain are transitive.
([[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]])

## Proof

**Proof technique:** direct.

1.1 Setup. Fix $\Omega'\Subset\Omega''\Subset\Omega$ and choose a chain $\Omega_{-1},\Omega_0,\dots,\Omega_{k+1}$ with $\Omega_{-1}:=\Omega''$, $\overline{\Omega'}\subset\Omega_k$, and all compact inclusions strict. This is possible by inserting finitely many intermediate open sets between $\overline{\Omega'}$ and $\Omega''$; after choosing $\Omega_k$, choose the extra $\Omega_{k+1}\Subset\Omega_k$ required by [F1]. [F2, given]

2.1 Applying the induction. Lemma [F1] with this chain and $j=k$ gives $u\in H^{k+2}(\Omega_k)$ and $\|u\|_{H^{k+2}(\Omega_k)}\le C_{k}(\|f\|_{H^k(\Omega_{-1})}+\|u\|_{L^2(\Omega_{-1})})$ with $C_k=C(n,\theta,k,M_0,\dots,M_{k+1},\Omega_{-1},\dots,\Omega_k)$. Since $\Omega'\subset\Omega_k$, restriction [F2] gives $u\in H^{k+2}(\Omega')$ with the same bound. [F1, F2, step 1.1]

3.1 Conclusion. Hence $u\in H^{k+2}(\Omega')$ for every $\Omega'\Subset\Omega$, i.e. $u\in H^{k+2}_{\mathrm{loc}}(\Omega)$, with the displayed estimate. At $k=0$, the base case of [F1] is the interior $H^2$ estimate; the intermediate open set in the chain only provides room to restrict that bound to $\Omega'$. [F1, step 2.1] ∎

## Source notes

Hunter's Theorem 4.28 (printed p. 114) states the result with the bound
$\|f\|_{H^k(\Omega)}+\|u\|_{L^2(\Omega)}$ for data in $H^k(\Omega)$; the
library formulation localises to $H^k_{\mathrm{loc}}$ data on a nested pair,
which is the form actually proved by the chain induction. Teschl's
Corollary 10.17 and Laugesen's Theorem 5.8 give the same theorem by the same
iteration of the interior estimate.
