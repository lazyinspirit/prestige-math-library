---
id: fs-all-infinite-finitely-generated-groups-are-quasi-isometric
kind: false-statement
title: "FALSE: any two infinite finitely generated groups are quasi-isometric"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-word-metric, prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite, def-coarse-lipschitz-map-and-quasi-isometric-embedding, def-coarsely-dense-subset-and-quasi-isometry, def-quasi-isometry-type-of-a-finitely-generated-group, def-free-group, cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length, def-metric-ball, def-finite-cardinality, thm-of-archimedean]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Statement refuted

any two infinite finitely generated groups are quasi-isometric.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A finitely generated group is quasi-isometric to a metric space when its word metric for some, equivalently every, finite generating set is ([[def-quasi-isometry-type-of-a-finitely-generated-group]]).

[L1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L2] Balls of a word metric are finite if and only if the generating set is finite ([[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]).

[L3] A subset is coarsely dense when every point of the space is within a fixed distance of it, and a quasi-isometry is a coarse Lipschitz map admitting a coarse Lipschitz quasi-inverse ([[def-coarsely-dense-subset-and-quasi-isometry]]).

[L4] $B(x,r)$ is the **open ball**, $\bar B(x,r)$ the **closed ball** and $S(x,r)$ the **sphere** of **centre** $x$ and **radius** $r$. The radius is always a strictly positive real; a ball of radius $0$ or of negative radius is never written in this library. ([[def-metric-ball]]).

[L5] A **free group on a set $X$** is a group $F(X)$ together with a map $i:X\to F(X)$ such that, for every group $G$ and every function $u:X\to G$, there is a unique group homomorphism $\widehat u:F(X)\to G$ satisfying ([[def-free-group]]).

[L6] A set $A$ is **finite** when $A \approx n$ for some $n \in \mathbb{N}$. ([[def-finite-cardinality]]).

[L7] A map is $(L,C)$-coarse Lipschitz when $d_Y(f(x),f(x'))\le L\,d_X(x,x')+C$, and an $(L,C)$-quasi-isometric embedding satisfies in addition $L^{-1}d_X(x,x')-C\le d_Y(f(x),f(x'))$ ([[def-coarse-lipschitz-map-and-quasi-isometric-embedding]]).

[L8] In a free group with respect to a free basis, word length is reduced-word length ([[cor-word-length-in-a-free-group-with-respect-to-a-free-basis-is-reduced-word-length]]).

[L9] For every real number there is a larger natural number ([[thm-of-archimedean]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts a single quasi-isometry class for all infinite finitely generated groups. [F1, assume-contra]

1.2 For each integer $n\ge1$, the open ball of radius $n+1$ in the integers has $2n+1$ elements. In the free group $F_2=\langle a,b\rangle$, the $2^n$ positive words of length $n$ in the letters $a,b$ are distinct reduced words, so the corresponding ball has at least $2^n$ elements. [L1, L2, L4, L5, L6, L8]

2.1 Suppose there were a quasi-isometry $f:F_2\to\mathbb Z$. By [L3] choose a coarse Lipschitz quasi-inverse $g:\mathbb Z\to F_2$, coarse-Lipschitz constants $A,B\ge0$ for $f$, and a bound $R\ge0$ with $d_{F_2}(g(f(x)),x)\le R$ for every $x\in F_2$. If $f(x)=f(x')$, then $d_{F_2}(x,x')\le d_{F_2}(x,g(f(x)))+d_{F_2}(g(f(x')),x')\le 2R$, so every fibre $f^{-1}(y)$ lies in the open ball $B_{F_2}(g(y),2R+1)$. By [L1], left multiplication by $g(y)^{-1}$ bijects that ball with $B_{F_2}(e,2R+1)$, so every fibre has at most $K:=|B_{F_2}(e,2R+1)|<\infty$ elements by [L2]. Moreover, if $x\in B_{F_2}(e,n+1)$ then $d_{\mathbb Z}(f(x),f(e))\le A\,d_{F_2}(x,e)+B<A(n+1)+B$, so $f(B_{F_2}(e,n+1))$ has at most $2\lceil A(n+1)+B\rceil+1$ elements. Hence $2^n\le |B_{F_2}(e,n+1)|\le K\bigl(2\lceil A(n+1)+B\rceil+1\bigr)$. But $2^n\ge n^2$ for $n\ge4$ by induction, while $2\lceil A(n+1)+B\rceil+1\le 2An+2A+2B+3$. By [L9] choose a natural $n\ge4$ so large that $n>4KA$ and $n^2>2K(2A+2B+3)$; then $n^2>K(2An+2A+2B+3)$, contradicting the displayed bound. Thus $F_2$ and $\mathbb Z$ are not quasi-isometric. [L1, L2, L3, L7, L8, L9, step 1.1, step 1.2, discharge-contradiction] ∎
