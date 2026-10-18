---
id: prop-yangian-rational-r-matrix-yang-baxter-and-invertibility
kind: proposition
title: "The type-A rational R-matrix satisfies Yang–Baxter and has exact singular parameters"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-yangian-gl-n-rtt-presentation, def-hh-rational-spectral-r-matrix, lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.4–1.5, printed pp. 9–10: the Yang R-matrix and the complete permutation proof of its spectral Yang–Baxter equation."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§3.1: Yang’s rational R-matrix and its spectral-difference convention."
    - title: "A. P. Isaev, Lectures on Quantum Groups and Yang-Baxter Equations"
      url: "https://arxiv.org/pdf/2206.08902"
      locator: "§3.9 and §3.13, PDF pp. 81–110: the rational Yangian R-matrix and spectral Yang–Baxter equation."
---

## Statement

Let $N\ge2$ and let $R_N(x)=xI+iP_N$ be as in [[def-yangian-gl-n-rtt-presentation]]. For all $a,b,c\in\mathbb C$, with $x=a-b$, $y=b-c$, and $z=a-c=x+y$,

$$R_{12}(x)R_{13}(z)R_{23}(y)=R_{23}(y)R_{13}(z)R_{12}(x)$$

on $V_N^{\otimes3}$. Moreover, $R_N(x)^{-1}=(xI-iP_N)/(x^2+1)$ when $x\notin\{i,-i\}$. At $x=i$ the kernel is $\bigwedge^2 V_N$ and the rank is $N(N+1)/2$; at $x=-i$ the kernel is $\operatorname{Sym}^2 V_N$ and the rank is $N(N-1)/2$.

## Facts & Assumptions

**Given:** $N\ge2$, the standard basis of $V_N$, and arbitrary $a,b,c\in\mathbb C$.

[F1] [[def-yangian-gl-n-rtt-presentation]]: $P_N(e_j\otimes e_k)=e_k\otimes e_j$, $R_N(x)=xI+iP_N$, and $P_{ij}$ swaps the indicated tensor positions.

[F2] [[def-hh-rational-spectral-r-matrix]]: on the ordered basis of $\mathbb C^2$, $P(e_j\otimes e_k)=e_k\otimes e_j$ and $R(x)=xI+iP$.

[F3] [[lem-hh-rational-spectral-r-matrix-satisfies-yang-baxter]]: for all complex spectral points, the corresponding un-checked three-leg operators satisfy the parameterized Yang–Baxter identity.

## Proof

1.1 For $N=2$, the ordered basis and flip in [F1] are exactly those in [F2], so $R_2(x)=R(x)$ on the same $\mathbb C^2\otimes\mathbb C^2$. The un-checked Yang–Baxter identity for this case is [F3]. [given, F1, F2, F3]

1.2 For $N\ge3$, put $s=P_{12}$, $t=P_{13}$, and $r=P_{23}$. Acting on any basis tensor $e_p\otimes e_q\otimes e_\ell$, the products $st,tr,rs$ all send $(p,q,\ell)$ to $(q,\ell,p)$, while $sr,rt,ts$ all send it to $(\ell,p,q)$; also $str=rts$ as both send $(p,q,\ell)$ to $(\ell,q,p)$. Hence, as operators, with $A=st=tr=rs$ and $B=sr=rt=ts$, those permutation identities hold on the whole basis. [given, F1, algebra]

1.3 Expanding the left side gives $xyzI+i(yz\,s+xy\,t+xz\,r)-(y\,st+z\,sr+x\,tr)-i\,str$; the right side gives $xyzI+i(yz\,s+xy\,t+xz\,r)-(x\,rt+z\,rs+y\,ts)-i\,rts$. By step 1.2, the quadratic parts are respectively $-((x+y)A+zB)$ and $-(zA+(x+y)B)$, which agree since $x+y=z$; the scalar and linear parts match termwise and the cubic terms match by $str=rts$. This proves the Yang–Baxter identity for all $N\ge3$, and step 1.1 covers $N=2$. [given, F1, step 1.1, step 1.2, algebra]

2.1 The flip satisfies $P_N^2=I$, so direct multiplication gives $(xI+iP_N)(xI-iP_N)=(x^2+1)I=(xI-iP_N)(xI+iP_N)$. Over $\mathbb C$, $x^2+1\ne0$ exactly when $x\notin\{i,-i\}$; division by this scalar gives the stated inverse. [given, F1, algebra]

2.2 The operators $P_+=(I+P_N)/2$ and $P_-=(I-P_N)/2$ are complementary projectors because $P_N^2=I$. Their images have bases $e_j\otimes e_j$, $e_j\otimes e_k+e_k\otimes e_j$ and $e_j\otimes e_k-e_k\otimes e_j$ for $j<k$, respectively, so their dimensions are $N(N+1)/2$ and $N(N-1)/2$. On these subspaces $R_N(x)$ acts by $x+i$ and $x-i$; therefore at $x=i$ it has kernel $\operatorname{im}P_-=\bigwedge^2V_N$, and at $x=-i$ it has kernel $\operatorname{im}P_+=\operatorname{Sym}^2V_N$, with the ranks stated. [given, F1, step 2.1, algebra] ∎

## Diagram

Each arrow is a composite endomorphism of $V_N^{\otimes3}$, with its rightmost factor applied first. The diagram records the two sides of the equation just proved; the equality follows from the basis-permutation calculation in the proof, not from the diagram.

```tikzcd
\begin{tikzcd}[column sep=huge]
V_N^{\otimes3}
\arrow[r, bend left=35, "R_{12}(x)R_{13}(z)R_{23}(y)"]
\arrow[r, bend right=35, "R_{23}(y)R_{13}(z)R_{12}(x)"']
& V_N^{\otimes3}
\end{tikzcd}
```
