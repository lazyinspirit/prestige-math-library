---
id: lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter
kind: lemma
title: "The rational spin-1/2 spectral R-matrix satisfies Yang-Baxter"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-hh-rational-spectral-r-matrix]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 3, equations (33)–(39): the rational spin-1/2 R-matrix and permutation identities"
    - title: "Pavel Etingof and Mykola Semenyakin, A Brief Introduction to Quantum Groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "Section 5.4.2, PDF pp. 33–34: spectral-parameter Yang-Baxter equation and its meromorphic scope"
---

## Statement

Let $V$, $R(u)$, $R_{ij}(u)$, and $\check R_j(u)$ be as in [[def-hh-rational-spectral-r-matrix]]. For arbitrary $x,y,z\in\mathbb C$, set $u=x-y$, $v=y-z$, and $w=x-z=u+v$. In $\operatorname{End}_{\mathbb C}(V^{\otimes3})$ the un-checked operators satisfy

$$R_{12}(u)R_{13}(w)R_{23}(v)=R_{23}(v)R_{13}(w)R_{12}(u).$$

The checked operators also satisfy the braid-form spectral identity

$$\check R_1(u)\check R_2(w)\check R_1(v)=\check R_2(v)\check R_1(w)\check R_2(u).$$

## Facts & Assumptions

**Given:** The fixed space $V=\mathbb C^2$ and the endomorphisms defined in [[def-hh-rational-spectral-r-matrix]], together with arbitrary $x,y,z\in\mathbb C$.

[F1] [[def-hh-rational-spectral-r-matrix]]: $P_{12}$, $P_{13}$, and $P_{23}$ act on the standard tensor basis by the corresponding transpositions; $R_{ij}(t)=tI+iP_{ij}$ and $\check R_1(t)=tP_{12}+iI$, $\check R_2(t)=tP_{23}+iI$.

## Proof

1.1 Write $s=P_{12}$, $t=P_{13}$, and $r=P_{23}$. On each basis tensor $e_a\otimes e_b\otimes e_c$, the products $st$, $tr$, and $rs$ all give $e_b\otimes e_c\otimes e_a$; the products $sr$, $rt$, and $ts$ all give $e_c\otimes e_a\otimes e_b$; and $str$ and $rts$ both give $e_c\otimes e_b\otimes e_a$. Also $srs$ and $rsr$ both give $e_c\otimes e_b\otimes e_a$, while $s^2=r^2=I$. Since the eight elementary tensors form a basis, these are equalities of endomorphisms. [given, F1, algebra]

2.1 Expand the left side of the un-checked identity as $uwvI+i(wvs+uvt+uwr)-(vst+wsr+utr)-istr$. Expand the right side as $uwvI+i(wvs+uvt+uwr)-(urt+wrs+vts)-irts$. By step 1.1, put $A=st=tr=rs$ and $B=sr=rt=ts$; then the left quadratic term is $-(u+v)A-wB=-w(A+B)$, and the right quadratic term is $-wA-(u+v)B=-w(A+B)$. The scalar, linear, and cubic terms agree as well, using $u+v=w$ and $str=rts$. This proves the un-checked identity. [given, F1, step 1.1, algebra]

3.1 The checked left side expands to $i(uv-1)I-w(s+r)+iw(usr+vrs)+uvw srs$. The checked right side expands to $i(uv-1)I-w(s+r)+iw(vrs+usr)+uvw rsr$. These expressions agree by step 1.1 and $w=u+v$, proving the checked identity. [given, F1, step 1.1, algebra] ∎

## Diagram

Read each arrow label as a composite of endomorphisms, with the rightmost factor applied first. The two arrows have the same source and target; this is a notation diagram for the checked identity above, not part of its proof.

```tikzcd
\begin{tikzcd}[column sep=huge]
V^{\otimes 3}
\arrow[r, bend left=35, "\check R_1(u)\check R_2(u+v)\check R_1(v)"]
\arrow[r, bend right=35, "\check R_2(v)\check R_1(u+v)\check R_2(u)"']
& V^{\otimes 3}
\end{tikzcd}
```
