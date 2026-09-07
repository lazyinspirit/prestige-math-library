---
id: "lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair"
kind: "lemma"
title: "Any ordinary homology theory has a cellular chain complex on a cw pair"
deps: ["lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group", "prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs", "def-skeleta-cw-subcomplex-and-relative-cw-complex"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, definition of C_n and d, p.119"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, definition of C_n and d, p.119"
status: "draft"
origin: "pipeline"
proof_strategy: "Use quotient wedges, arbitrary additivity, and exactness of triples. Do not yet identify the integer incidence action for an arbitrary h."
---

## Statement

For a CW pair $(X,A)$ and an ordinary theory $h$ with coefficient $G$, put $F_{-1}=A$ and $F_r=A\cup X^r$ for $r\ge0$. Set
$$C_r^h(X,A)=h_r(F_r,F_{r-1})\quad(r\ge0),\qquad C_r^h=0\quad(r<0).$$
Each $C_r^h$ is the direct sum of copies of $G$ indexed by the relative $r$-cells. Define $d_0=0$ and for $r\ge1$ let $d_r$ be the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$. Then $d_{r-1}d_r=0$, naturally for cellular maps of CW pairs.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Let $h$ be an ordinary theory with coefficient group $G=h_0(*)$. For every $n\ge0$ and $k\in\mathbb Z$, $$h_k(D^n,S^{n-1})\cong\begin{cases}G&k=n,\\0&k\ne n.\end{cases}$$ At $n=0$ the pair means $(*,\varnothing)$. Also $\widetilde h_k(S^n)\cong G$ for $k=n$ and zero otherwise, including $n=0$. Choose the disk identifications by ordered orientations and iterated cone boundaries, so they commute with these boundaries. ([[lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group]])

[F2] Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$. Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$. ([[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]])

[F3] Write $X^n$ for the union of cells of dimension at most $n$, with $X^{-1}=\varnothing$. A **CW subcomplex** $A\subseteq X$ is a union of open cells such that, whenever $A$ contains an open cell $e$, it contains the whole closure $\overline e$. A **relative CW complex** $(X,A)$ is formed from the subcomplex $A$ by attaching cells in stages; thus $A\hookrightarrow X$ is a cellular inclusion. ([[def-skeleta-cw-subcomplex-and-relative-cw-complex]])

## Proof

1.1 By the skeletal definition F3, collapsing $F_{r-1}$ leaves a wedge of one $r$-sphere per relative cell, using the disjoint-basepoint convention when $F_{r-1}$ is empty. Quotient identification and arbitrary wedge additivity in F2, followed by F1, show $h_k(F_r,F_{r-1})$ is zero for $k\ne r$ and the stated direct sum for $k=r$. This includes no cells and zero-dimensional cells. [F1, F2, F3]

1.2 Write $\delta_r:h_r(F_r,F_{r-1})\to h_{r-1}(F_{r-1},A)$ for the triple boundary and $\rho_r:h_r(F_r,A)\to h_r(F_r,F_{r-1})$ for the quotient map. The differential is $d_r=\rho_{r-1}\delta_r$. Exactness of the triple $(F_{r-1},F_{r-2},A)$ gives $\delta_{r-1}\rho_{r-1}=0$. [F2]

2.1 Consequently $d_{r-1}d_r=\rho_{r-2}(\delta_{r-1}\rho_{r-1})\delta_r=0$ for $r\ge2$; for $r=1$ it holds because $d_0=0$. A cellular map preserves each $F_r$ and all natural triple maps, so it commutes with these differentials. No sphere-map incidence identification has been used. [F2, step 1.2, algebra] ∎
