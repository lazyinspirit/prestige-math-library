---
id: lem-pa36-principal-nilpotent-borel-orbit
kind: lemma
title: The principal nilpotent Borel orbit by height elimination
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-complex-semisimple-algebraic-group-borel-and-flag-variety
  - lem-semisimple-borel-root-factorization
  - lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§§17.1–17.3, especially Lemma 17.2 and Corollary 17.3, printed pp. 88–90; the height-by-height expansion is supplied here"
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§6.2, printed pp. 92–93, for the principal nilpotent and nilpotent cone"
---

## Statement

Assume the Axiom of Choice and the setup of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]]. For each
simple root $\alpha_i$ choose a nonzero root vector $e_i\in\mathfrak g_{\alpha_i}$
and put $e=\sum_i e_i$. Write
$\mathfrak n^+_j=\bigoplus_{\operatorname{ht}(\alpha)=j}\mathfrak g_\alpha$.
Then
$$B\cdot e=\left\{\sum_{\alpha\in\Phi^+}c_\alpha e_\alpha\in\mathfrak n^+:
c_{\alpha_i}\ne0\text{ for every simple root }\alpha_i\right\},$$
where one nonzero $e_\alpha\in\mathfrak g_\alpha$ is fixed for each positive
root. The right side is independent of the choices of those root vectors.

## Facts & Assumptions

**Given:** A connected simply connected complex semisimple group $G$, Borel
$B=T\ltimes U$, its positive root system, and nonzero simple-root vectors
$e_i$.

[F1] The proof of [[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]],
step 1.2, constructs $e=\sum_i e_i$ in a principal $\mathfrak{sl}_2$ triple;
the adjoint representation is a direct sum of strings of even highest weights
$2m_j>0$, and $\ker\operatorname{ad}e$ has dimension $\operatorname{rank}G$.

[F2] $B=T\ltimes U$, $U=\exp(\mathfrak n^+)$, the positive root spaces are
one-dimensional, and the simple roots form a basis of the root lattice
([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]],
[[lem-semisimple-borel-root-factorization]]).

## Proof

1.1 On a principal $\mathfrak{sl}_2$ string with highest weight $2m>0$,
$\operatorname{ad}h$ has weights $-2m,-2m+2,\ldots,2m$. For every $j\ge1$,
if weight $2j$ occurs then weight $2j-2$ occurs, and the raising operator
$\operatorname{ad}e$ maps the latter one-dimensional weight space onto the
former. Summing over the strings in [F1] gives
$$[e,\mathfrak n^+_j]=\mathfrak n^+_{j+1}\qquad(j\ge1),$$
with zero spaces understood above the maximal root height. [F1, F2, algebra]

1.2 Let $x\in\mathfrak n^+$ have nonzero simple coefficients. The map
$T\to(\mathbb C^\times)^r$, $t\mapsto(\alpha_i(t))_i$, is an isogeny:
its character-lattice map has image the full-rank root lattice. An isogeny of
complex tori is surjective on complex points, so conjugation by one $t\in T$
sets all simple coefficients of $x$ to $1$. Now suppose heights below $j+1$
already agree with those of $e$. Their height-$(j+1)$ difference lies in
$\mathfrak n^+_{j+1}$; by [step 1.1] choose $u_j\in\mathfrak n^+_j$ whose
bracket with $e$ cancels that difference. The finite exponential
$\exp(\operatorname{ad}u_j)$ changes no height at most $j$ and changes height
$j+1$ by $[u_j,e]$; all its higher commutators have height at least $j+2$.
Induction over the finitely many root heights conjugates $x$ to $e$ by $U$.
[F1, F2, step 1.1, choose, construct]

2.1 Conversely, conjugation by $T$ scales each simple-root coefficient by a
nonzero scalar. For $u\in U$, every commutator in
$\exp(\operatorname{ad}u)e-e$ has height at least two, because $u$ has
positive height and $e$ has height one. Thus $U$ fixes the simple-root
coefficients, and $B=TU$ preserves their nonvanishing. The inclusion in the
right side and the reverse inclusion from step 1.2 prove the equality. The
rank-zero case has $\mathfrak n^+=0$, $e=0$ and both sides are the singleton
$\{0\}$. [F2, step 1.2, algebra] ∎
