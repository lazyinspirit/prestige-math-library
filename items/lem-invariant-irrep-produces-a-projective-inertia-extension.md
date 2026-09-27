---
id: lem-invariant-irrep-produces-a-projective-inertia-extension
kind: lemma
title: "An invariant irreducible normal representation yields projective inertia operators"
status: draft
origin: pipeline
deps: ["def-projective-representation-and-factor-set", "lem-factor-set-is-a-normalized-two-cocycle", "def-conjugate-representation-and-inertia-group", "def-conjugate-representation-and-conjugate-character", "cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars", "thm-complex-representations-are-determined-by-their-characters", "def-normalized-two-cocycle-and-two-coboundary"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — Definition 1.4, Lemma 1.8(a)–(d), printed pp. 2–4"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — §4.2, printed pp. 54–57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: direct
---

## Statement

Let $N\trianglelefteq G$ be finite groups, let $\rho:N\to\operatorname{GL}(S)$
be an irreducible representation on a nonzero finite-dimensional complex space
$S$, let $\theta$ be its character, and let $I=I_G(\theta)$ be the inertia
group. Then there are operators $P(i)\in\operatorname{GL}(S)$, $i\in I$, with
$P(1)=\operatorname{id}_S$ and
$$P(n)=\rho(n),\qquad P(ni)=\rho(n)P(i),\qquad P(in)=P(i)\rho(n)\qquad(n\in N,\ i\in I),$$
and there is a normalized two-cocycle $\alpha$ on $Q=I/N$, in the multiplicative
convention of [[def-normalized-two-cocycle-and-two-coboundary]], such that
$$P(i)P(j)=\alpha(iN,jN)P(ij)\qquad(i,j\in I).$$
Thus $P$ is a normalized projective representation of $I$ whose factor set
descends to $I/N$. Every second family $P'$ with the same normalization and the
same three identities satisfies $P'(i)=c(iN)P(i)$ for a function
$c:Q\to\mathbb C^\times$ with $c(N)=1$, and the factor set of $P'$ is
$$\alpha'(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)\qquad(q,r\in Q).$$

## Facts & Assumptions

**Given:** Finite groups $N\trianglelefteq G$, an irreducible finite-dimensional complex representation $\rho:N\to\operatorname{GL}(S)$ with $S\ne0$, its character $\theta=\chi_\rho$, the inertia group $I=I_G(\theta)$, and a left transversal $T$ for the cosets $iN$ of $N$ in $I$ with $1\in T$.

[F1] $${}^g\theta(n)=\theta(g^{-1}ng)$$ and $I_G(\theta)=\{g\in G:{}^g\theta=\theta\}$, and the stabilizer satisfies $N\le I_G(\theta)\le G$. ([[def-conjugate-representation-and-inertia-group]]).

[F2] The conjugate representation ${}^gW$ of a representation $W$ of $H\le G$ is the same space regarded as a representation of $gHg^{-1}$ by $(ghg^{-1})\cdot w:=h\cdot w$, and ${}^g\chi(ghg^{-1})=\chi(h)$ for its character. ([[def-conjugate-representation-and-conjugate-character]]).

[F3] Finite-dimensional complex representations of a finite group are isomorphic if and only if they have the same character. ([[thm-complex-representations-are-determined-by-their-characters]]).

[F4] Every endomorphism of an irreducible representation over an algebraically closed field is a scalar operator. ([[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F5] The factor set of a normalized projective representation satisfies $\alpha(1,q)=\alpha(q,1)=1$ and $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$. ([[lem-factor-set-is-a-normalized-two-cocycle]]).

[F6] A normalized two-cocycle on a group $G$ with values in the abelian group $M=\mathbb C^\times$ written multiplicatively and with trivial action is a function $\alpha:G\times G\to\mathbb C^\times$ with $\alpha(1,q)=\alpha(q,1)=1$ and $\alpha(q,r)\alpha(qr,s)=\alpha(r,s)\alpha(q,rs)$ for all $q,r,s$. ([[def-normalized-two-cocycle-and-two-coboundary]]).

[A1] Since $N\trianglelefteq I$, left and right cosets coincide, so every $i\in I$ has a unique expression $i=nt$ and a unique expression $i=tn'$ with $n,n'\in N$ and $t\in T$; explicitly $t=t_i$ is the transversal element with $i\in tN$, $n=it^{-1}$ and $n'=t^{-1}i$.



## Proof

**Proof technique:** direct.

1.1 For $t\in T$ the conjugate ${}^t\rho$ is a representation of $tNt^{-1}=N$ whose character is ${}^t\theta=\theta=\chi_\rho$ by [F1] and [F2]; hence ${}^t\rho\cong\rho$ by [F3]. Choose $T_t\in\operatorname{GL}(S)$ with $T_t\rho(n)=\rho(tnt^{-1})T_t$ for every $n\in N$, and set $T_1:=\operatorname{id}_S$, which satisfies this relation. [F1, F2, F3, given, choose]

2.1 By [A1] write each $i\in I$ as $i=n_it_i$ with $n_i\in N$, $t_i\in T$, and set $P(i):=\rho(n_i)T_{t_i}$. This is well defined because the pair $(n_i,t_i)$ is unique, and $P(1)=\rho(1)T_1=\operatorname{id}_S$, while $P(n)=\rho(n)T_1=\rho(n)$ for $n\in N$; each $P(i)$ is invertible, with $P(i)^{-1}=T_{t_i}^{-1}\rho(n_i)^{-1}$. [A1, step 1.1, given]

3.1 For $x\in N$ and $i\in I$ one has $P(xi)=\rho(x)P(i)$ and $P(ix)=P(i)\rho(x)$. Indeed $xi=(xn_i)t_i$ and $ix=n_i(t_ix t_i^{-1})t_i$ are the decompositions of [A1], so $P(xi)=\rho(xn_i)T_{t_i}=\rho(x)P(i)$, and $P(ix)=\rho(n_i)\rho(t_ixt_i^{-1})T_{t_i}=\rho(n_i)T_{t_i}\rho(x)=P(i)\rho(x)$ using the intertwining relation of step 1.1. [A1, step 1.1, step 2.1, algebra]

3.2 For every $i\in I$ and $m\in N$ one has $P(i)\rho(m)P(i)^{-1}=\rho(imi^{-1})$. Indeed $P(i)\rho(m)P(i)^{-1}=\rho(n_i)T_{t_i}\rho(m)T_{t_i}^{-1}\rho(n_i)^{-1}=\rho(n_i)\rho(t_imt_i^{-1})\rho(n_i)^{-1}=\rho(i\,m\,i^{-1})$, using $i=n_it_i$ and step 1.1. [step 1.1, step 2.1, algebra]

4.1 For $i,j\in I$ the operator $A(i,j):=P(i)P(j)P(ij)^{-1}$ is invertible and satisfies $A(i,j)\rho(m)=P(i)P(j)\rho((ij)^{-1}m(ij))P(ij)^{-1}=\rho(i\,j\,(ij)^{-1}m(ij)\,j^{-1}i^{-1})A(i,j)=\rho(m)A(i,j)$ for every $m\in N$, by step 3.2 applied to $i$, $j$ and $ij$; since $\rho$ is irreducible over the algebraically closed field $\mathbb C$, [F4] gives a unique $\alpha(i,j)\in\mathbb C^\times$ with $A(i,j)=\alpha(i,j)\operatorname{id}_S$, the scalar being nonzero because $A(i,j)$ is invertible, so $P(i)P(j)=\alpha(i,j)P(ij)$ for all $i,j\in I$. [step 3.2, F4, given, algebra]

5.1 The scalar $\alpha(i,j)$ of step 4.1 depends only on the cosets $iN$ and $jN$: the general element of $iN$ is $ix$ and the general element of $jN$ is $yj$ with $x,y\in N$, so it suffices to compare $A(ix,j)$ and $A(i,yj)$ with $A(i,j)$. For the first, $ixj=(ij)(j^{-1}xj)$ with $j^{-1}xj\in N$, so $P(ixj)=P(ij)\rho(j^{-1}xj)$ by step 3.1 and $\rho(j^{-1}xj)=P(j)^{-1}\rho(x)P(j)$ by step 3.2, whence $A(ix,j)=P(i)\rho(x)P(j)\rho(j^{-1}xj)^{-1}P(ij)^{-1}=P(i)\rho(x)\rho(x)^{-1}P(j)P(ij)^{-1}=A(i,j)$. For the second, $yj=y\cdot j$ and $iyj=(iyi^{-1})(ij)$ with $iyi^{-1}\in N$, so $P(yj)=\rho(y)P(j)$ and $P(iyj)=\rho(iyi^{-1})P(ij)$ by step 3.1, while $P(i)\rho(y)P(i)^{-1}=\rho(iyi^{-1})$ by step 3.2, hence $A(i,yj)=P(i)\rho(y)P(j)P(ij)^{-1}\rho(iyi^{-1})^{-1}=\rho(iyi^{-1})A(i,j)\rho(iyi^{-1})^{-1}=A(i,j)$, the last equality because $A(i,j)$ is a scalar. [step 3.1, step 3.2, step 4.1, algebra]

6.1 Write $\alpha(iN,jN):=\alpha(i,j)$, which is well defined by step 5.1, so that $P(i)P(j)=\alpha(iN,jN)P(ij)$ for all $i,j\in I$; and $\alpha(N,qN)=\alpha(qN,N)=1$ for every $q\in I$, since $P(1)P(j)=P(j)$ and $P(i)P(1)=P(i)$ with $P(1)=\operatorname{id}_S$ by step 2.1 force $A(1,j)=\operatorname{id}_S=A(i,1)$. [step 2.1, step 4.1, step 5.1, given]

7.1 The function $\alpha:Q\times Q\to\mathbb C^\times$ is a normalized two-cocycle on $Q=I/N$ in the sense of [F6]: the normalization is step 6.1, and associativity of composition in $\operatorname{GL}(S)$ gives $\alpha(i,j)\alpha(ij,k)P(ijk)=(P(i)P(j))P(k)=P(i)(P(j)P(k))=\alpha(j,k)\alpha(i,jk)P(ijk)$, while $P(ijk)$ is invertible by step 2.1, so $\alpha(iN,jN)\alpha(ijN,kN)=\alpha(jN,kN)\alpha(iN,jkN)$; passing to cosets, this is the cocycle identity of [F6] on $Q$. [F6, step 2.1, step 6.1, algebra]

7.2 Now let $P'$ be a second family with the same normalization and the same three identities. For each $i\in I$, the operator $C(i):=P(i)^{-1}P'(i)$ commutes with $\rho(N)$: by step 3.2, which applies to $P'$ by the same computation, $P(i)\rho(m)P(i)^{-1}=\rho(imi^{-1})=P'(i)\rho(m)P'(i)^{-1}$, hence $C(i)\rho(m)=\rho(m)C(i)$ for all $m\in N$. By [F4] there is a unique $c(i)\in\mathbb C^\times$ with $C(i)=c(i)\operatorname{id}_S$, so $P'(i)=c(i)P(i)$. Step 3.1 for both families gives $c(xi)=c(i)=c(ix)$ for $x\in N$, so $c$ is constant on both left and right $N$-cosets and defines $c:Q\to\mathbb C^\times$, and $c(N)=1$ because $P'(1)=P(1)=\operatorname{id}_S$. Finally $P'(i)P'(j)=c(i)c(j)\alpha(iN,jN)P(ij)=c(i)c(j)c(ij)^{-1}\alpha(iN,jN)P'(ij)$, so the factor set of $P'$ is $\alpha'(q,r)=c(q)c(r)c(qr)^{-1}\alpha(q,r)$. [step 3.1, step 3.2, step 4.1, step 6.1, F4, algebra]

8.1 Steps 2.1, 3.1, 6.1 and 7.1 produce operators $P(i)\in\operatorname{GL}(S)$ with $P(1)=\operatorname{id}_S$, $P(n)=\rho(n)$, $P(ni)=\rho(n)P(i)$, $P(in)=P(i)\rho(n)$ and $P(i)P(j)=\alpha(iN,jN)P(ij)$ for the normalized two-cocycle $\alpha$ on $I/N$. Composing $\alpha$ with the coset projection $I\times I\to(I/N)\times(I/N)$ therefore expresses $P$ as a normalized projective representation of $I$ in the sense of [F5] whose factor set is carried by $I/N$, and step 7.2 shows that every other normalized family differs from $P$ by a $\mathbb C^\times$-valued cochain $c$ on $I/N$ with $\alpha'=c(q)c(r)c(qr)^{-1}\alpha$. [F5, step 2.1, step 3.1, step 6.1, step 7.1, step 7.2] ∎
