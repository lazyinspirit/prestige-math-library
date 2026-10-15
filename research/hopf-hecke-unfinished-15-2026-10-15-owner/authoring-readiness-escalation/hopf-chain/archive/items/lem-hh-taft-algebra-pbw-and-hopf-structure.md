---
id: lem-hh-taft-algebra-pbw-and-hopf-structure
kind: lemma
title: "The Taft algebra: PBW basis and Hopf structure"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - def-hh-hopf-algebra-and-antipode
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-tensor-coherence-on-elementary-tensors
  - lem-hh-free-associative-ring-and-relations-descent
  - lem-hh-counit-uniqueness-and-finite-sweedler-calculus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §3.12"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---
 
## Statement

Let $k$ be a field, $N>1$, and $\zeta\in k$ a primitive $N$-th root of unity, with $\operatorname{char}(k)\nmid N$. On the $N^2$-dimensional vector space with basis $g^i x^j$, $0\le i,j<N$, define multiplication on basis elements by $(g^i x^j)(g^a x^b)=\zeta^{-aj}g^{\,i+a\ {\rm mod}\ N}x^{j+b}$ if $j+b<N$, and by $0$ if $j+b\ge N$. Then this is an associative unital algebra and is the presented algebra $k\langle g,x\rangle/(g^N-1,\ x^N,\ gx-\zeta xg)$; the displayed basis is a basis of that quotient. It becomes a Hopf algebra with $\Delta(g)=g\otimes g$, $\Delta(x)=1\otimes x+x\otimes g$, $\varepsilon(g)=1$, $\varepsilon(x)=0$, $S(g)=g^{-1}$, and $S(x)=-xg^{-1}$.

## Facts & Assumptions

**Given:** A field $k$, an integer $N>1$, and a primitive $N$-th root of unity $\zeta\in k$ with $\operatorname{char}(k)\nmid N$.

[F1] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra is a bialgebra with an antipode satisfying both convolution equations; no compositional bijectivity is required.

[F2] [[lem-hh-free-associative-ring-and-relations-descent]]: the free associative algebra on generators has the quotient universal property for a two-sided ideal of relations.

[F3] [[def-hh-scalar-and-tensor-conventions]] and [[lem-hh-tensor-coherence-on-elementary-tensors]]: tensor products are over $k$, iterated tensor products are identified by the stated associators, and elementary tensors span.

[F4] [[lem-hh-counit-uniqueness-and-finite-sweedler-calculus]]: Sweedler notation abbreviates finite tensor expressions, and contractions are well-defined linear maps on those tensors.

## Proof

**Proof technique:** direct.

1.1 Let $T$ be the vector space with basis $e_{i,j}$, $i\in\mathbb Z/N\mathbb Z$, $0\le j<N$, and extend bilinearly the rule $e_{i,j}e_{a,b}=\zeta^{-aj}e_{i+a,j+b}$ when $j+b<N$, and $0$ otherwise. For a triple of basis elements, if $j+b+d\ge N$, both parenthesizations vanish: if an intermediate degree reaches $N$ it is truncated, and otherwise the final multiplication truncates. If $j+b+d<N$, the scalar in $(e_{i,j}e_{a,b})e_{c,d}$ is $\zeta^{-aj-c(j+b)}$, while the scalar in $e_{i,j}(e_{a,b}e_{c,d})$ is $\zeta^{-cb-(a+c)j}$; these exponents are equal, and both outputs are $e_{i+a+c,j+b+d}$. Hence multiplication is associative by bilinearity, and $e_{0,0}$ is its two-sided unit. [given, F3, construct, algebra]

1.2 Put $g=e_{1,0}$ and $x=e_{0,1}$. The formula gives $g^N=e_{0,0}$, $x^N=0$, $gx=e_{1,1}$, and $xg=\zeta^{-1}e_{1,1}$, so $gx=\zeta xg$. Thus the relations define a surjective algebra map from the presented quotient $Q=k\langle g,x\rangle/(g^N-1,x^N,gx-\zeta xg)$ to $T$, since each $e_{i,j}$ is the image of $g^i x^j$, by [F2]. [step 1.1, F2, algebra]

1.3 In $Q$, the relation $xg=\zeta^{-1}gx$ moves every $g$ to the left of every $x$; reducing $g$-powers modulo $N$ and setting any $x$-power at least $N$ to zero shows that the $N^2$ words $g^i x^j$, $0\le i,j<N$, span $Q$. Their images in $T$ are its distinct basis vectors $e_{i,j}$, hence are linearly independent in $Q$ as well. Therefore $Q\to T$ is an isomorphism and the claimed PBW basis is valid. [step 1.2, algebra]

2.1 Define $\Delta$ on the free algebra by the stated generator images. They preserve the relations: $\Delta(g)^N=1$, and with $A=1\otimes x$, $B=x\otimes g$ one has $BA=\zeta AB$ and $\Delta(x)=A+B$. If $(A+B)^n=\sum_{r=0}^n C_{n,r}A^{n-r}B^r$, then $C_{0,0}=1$ and $C_{n+1,r}=\zeta^rC_{n,r}+C_{n,r-1}$, since $B^rA=\zeta^rAB^r$. For $0\le n<N$ and $0\le r\le n$, the recurrence gives $C_{n,r}=\prod_{s=1}^r(1-\zeta^{n-r+s})/(1-\zeta^s)$: for $1\le r\le n$, set $P=\prod_{s=1}^{r-1}(1-\zeta^{n-r+1+s})$ and $D=\prod_{s=1}^r(1-\zeta^s)$; then $C_{n,r}=P(1-\zeta^{n-r+1})/D$ and $C_{n,r-1}=P(1-\zeta^r)/D$, so $\zeta^rC_{n,r}+C_{n,r-1}=P(1-\zeta^{n+1})/D=C_{n+1,r}$. For $n=N$ and $0<r<N$, the same formula has nonzero denominator factors and a numerator factor $1-\zeta^N=0$; hence $(A+B)^N=A^N+B^N=0$. Also $\Delta(g)\Delta(x)=g\otimes gx+gx\otimes g^2=\zeta(g\otimes xg+xg\otimes g^2)=\zeta\Delta(x)\Delta(g)$, so $\Delta(gx-\zeta xg)=0$, and $\Delta$ descends to $Q$. [given, step 1.2, F2, F3, algebra]

2.2 The assignment $\varepsilon(g)=1,\varepsilon(x)=0$ kills $g^N-1$, $x^N$, and $gx-\zeta xg$, so it descends to an algebra map $Q\to k$. Coassociativity holds on $g$ immediately; on $x$, both iterates equal $1\otimes1\otimes x+1\otimes x\otimes g+x\otimes g\otimes g$. The two counit equations hold on $g,x$ by the given values. These maps are algebra maps, and the presented algebra is generated by $g,x$, so the identities extend to all of $Q$. [step 1.2, step 2.1, F2, F3, algebra]

3.1 Extend $S$ as an anti-algebra map from the free algebra using $S(g)=g^{-1}$ and $S(x)=-xg^{-1}$. The relation ideal is killed: $S(g^N-1)=g^{-N}-1=0$; reordering with $g^{-1}x=\zeta^{-1}xg^{-1}$ shows $S(x^N)=(-xg^{-1})^N$ is a scalar multiple of $x^Ng^{-N}=0$; and $S(gx-\zeta xg)=S(x)S(g)-\zeta S(g)S(x)=-xg^{-2}+\zeta g^{-1}xg^{-1}=0$. Thus $S$ descends to $Q$. [step 1.2, algebra]

3.2 On $g$, both $m(S\otimes\mathrm{id})\Delta$ and $m(\mathrm{id}\otimes S)\Delta$ give $1=\varepsilon(g)1$. On $x$, the left product is $x+(-xg^{-1})g=0$, and the right product is $-xg^{-1}+xg^{-1}=0=\varepsilon(x)1$. For products $ab$ of elements on which both identities hold, anti-multiplicativity of $S$ and multiplicativity of $\Delta$ give $\sum S(a_1b_1)a_2b_2=\sum S(b_1)(S(a_1)a_2)b_2=\varepsilon(a)\varepsilon(b)1$, and $\sum a_1b_1S(a_2b_2)=\sum a_1(b_1S(b_2))S(a_2)=\varepsilon(a)\varepsilon(b)1$. Induction on word length and linearity extend both antipode equations to all of $Q$. Thus the given maps make $Q$ a Hopf algebra, with the interface of [F1]. [step 2.1, step 2.2, step 3.1, F1, F4, algebra] ∎
