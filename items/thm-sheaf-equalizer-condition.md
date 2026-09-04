---
id: thm-sheaf-equalizer-condition
kind: theorem
title: "The sheaf axiom is the equalizer condition on a cover"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheaf-on-topological-space, def-section-restriction-and-global-section, def-equalizers-and-coequalizers]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Lemma 4.2"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $\mathcal F$ be a presheaf of sets on a topological space $X$. Then
$\mathcal F$ is a sheaf if and only if, for every open set $U \subseteq X$ and
every open cover $U=\bigcup_{i\in I}U_i$, the restriction map
$$e:\mathcal F(U)\longrightarrow\prod_{i\in I}\mathcal F(U_i),\qquad e(s)=(s|_{U_i})_{i\in I},$$
is an equalizer of the two maps
$$d_0,d_1:\prod_{i\in I}\mathcal F(U_i)\rightrightarrows \prod_{(i,j)\in I\times I}\mathcal F(U_i\cap U_j),$$
defined by
$$d_0((s_i))=(s_i|_{U_i\cap U_j})_{i,j},\qquad d_1((s_i))=(s_j|_{U_i\cap U_j})_{i,j}.$$

## Facts & Assumptions

**Given:** A presheaf $\mathcal F$, an open set $U$, and an open cover $U=\bigcup_{i\in I}U_i$.

[L1] A sheaf is exactly a presheaf satisfying locality and unique gluing for every open cover ([[def-sheaf-on-topological-space]]).

[F1] The notation $s|_{U_i}$ and $s_i|_{U_i\cap U_j}$ is the presheaf restriction notation ([[def-section-restriction-and-global-section]]).

[L2] An equalizer of parallel maps $f,g:A\rightrightarrows B$ is a morphism $e:E\to A$ with $fe=ge$ such that any $h:T\to A$ with $fh=gh$ factors uniquely through $e$ ([[def-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal F$ is a sheaf. For any $s\in\mathcal F(U)$, the two families $d_0(e(s))$ and $d_1(e(s))$ are equal because both entries on $U_i\cap U_j$ are the common restriction $s|_{U_i\cap U_j}$ by [F1]. Thus $d_0e=d_1e$. [L1, F1]

1.2 Let $(s_i)_{i\in I}\in\prod_i\mathcal F(U_i)$ satisfy $d_0((s_i))=d_1((s_i))$. Unwinding the definitions, this says exactly that $s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}$ for all $i,j$. By the gluing clause of [L1], there exists a unique $s\in\mathcal F(U)$ with $s|_{U_i}=s_i$ for all $i$. Hence every equalizing family factors uniquely through $e$, so [L2] shows that $e$ is an equalizer. [L1, L2, F1]

2.1 Conversely, assume $e$ is an equalizer for every open set and cover. If $s,t\in\mathcal F(U)$ satisfy $s|_{U_i}=t|_{U_i}$ for all $i$, then $e(s)=e(t)$. Let $\ast$ be a singleton and define $h:\{\ast\}\to\prod_i\mathcal F(U_i)$ by $h(\ast)=e(s)=e(t)$. Then $d_0h=d_1h$, so [L2] gives a unique $u:\{\ast\}\to\mathcal F(U)$ with $eu=h$. The two maps sending $\ast$ to $s$ and to $t$ both satisfy this condition, hence are equal and therefore $s=t$. So locality holds. If $(s_i)$ is a compatible family on the cover, then $d_0((s_i))=d_1((s_i))$, so [L2] yields a unique $s\in\mathcal F(U)$ with $e(s)=(s_i)$. That is exactly unique gluing. Therefore [L1] implies that $\mathcal F$ is a sheaf. [L1, L2, F1] ∎
