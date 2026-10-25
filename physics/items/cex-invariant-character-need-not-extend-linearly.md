---
id: cex-invariant-character-need-not-extend-linearly
kind: counterexample
title: "An invariant central character of the quaternion group with no linear extension"
status: published
origin: pipeline
deps: ["ex-q8-as-a-central-extension-of-c2-times-c2", "thm-extension-exists-iff-the-clifford-obstruction-vanishes", "def-quaternion-group-of-order-eight", "def-extension-of-an-irreducible-normal-subgroup-representation", "def-conjugate-representation-and-inertia-group"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Britta Späth, Reduction theorems for some global-local conjectures — §1.B, printed pp. 3–5"
      url: "https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf"
    - title: "Tammo tom Dieck, Representation Theory — Proposition (4.2.6) and Remark (4.2.7), printed p. 57"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
proof_strategy: counterexample
verification:
  audited: 2026-09-27
---

## Counterexample

The nontrivial character $\theta$ of the centre $Z(Q_8)=\{\pm1\}$ of the
quaternion group, $\theta(-1)=-1$, is invariant under $Q_8$ but has no linear
extension to $Q_8$: every linear character of $Q_8$ takes the value $1$ at
$-1$, since $-1=[i,j]$ lies in the commutator subgroup. Thus invariance of a
normal type does not by itself make the type extendible, which is why the
little group method needs the split hypothesis or the projective correction.

## Facts & Assumptions

**Given:** The quaternion group $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$ of [[def-quaternion-group-of-order-eight]] and the character $\theta$ of $Z(Q_8)=\{\pm1\}$ with $\theta(1)=1$, $\theta(-1)=-1$.

[F1] $Q_8$ has $i^2=j^2=k^2=-1$, $ij=k$, $ji=-k$ and $k=ij$; the element $-1$ is central. ([[def-quaternion-group-of-order-eight]]).

[F2] A character of a normal subgroup $N\trianglelefteq G$ is invariant when ${}^g\theta=\theta$ for all $g\in G$, where ${}^g\theta(n)=\theta(g^{-1}ng)$, and then the inertia group is $G$. ([[def-conjugate-representation-and-inertia-group]]).

[F3] An extension of $\theta$ to a subgroup $H$ with $N\le H\le G$ is a representation $\widetilde\rho:H\to\operatorname{GL}(S)$ on the space $S$ affording $\theta$ with $\widetilde\rho|_N=\rho$; at character level, an extension of $\theta$ is a character $\widetilde\theta$ with $\operatorname{Res}_N^H\widetilde\theta=\theta$. ([[def-extension-of-an-irreducible-normal-subgroup-representation]]).

[F4] An invariant irreducible representation extends to its inertia group if and only if its Clifford obstruction class is zero. ([[thm-extension-exists-iff-the-clifford-obstruction-vanishes]]).

[F5] The faithful two-dimensional representation of $Q_8$ gives a projective representation of $Q_8/\{\pm1\}\cong C_2\times C_2$ whose factor set takes the values $\alpha(y,x)=-1\ne1=\alpha(x,y)$ and is not a coboundary, so that $H^2(Q_8/\{\pm1\},\mathbb C^\times)$ contains a nonzero class. ([[ex-q8-as-a-central-extension-of-c2-times-c2]]).

[A1] A linear extension of the one-dimensional character $\theta$ is a group homomorphism $\lambda:Q_8\to\mathbb C^\times$ with $\lambda(-1)=\theta(-1)=-1$, since a one-dimensional representation is a homomorphism and its character is itself.



## Verification

**Proof technique:** counterexample.

1.1 The centre of $Q_8$ is $Z(Q_8)=\{\pm1\}$: the element $-1$ is central by [F1], while $i$, $j$ and $k$ are not central because $ij=k$ and $ji=-k\ne k$, together with their cyclic analogues; since every element of $Q_8$ is one of $\pm1,\pm i,\pm j,\pm k$ by [F1], these are all the central elements. [F1, given, algebra]

1.2 Every linear character $\lambda:Q_8\to\mathbb C^\times$ satisfies $\lambda(-1)=1$: from the relations of [F1], $iji^{-1}j^{-1}=(ij)(ji)^{-1}=k\cdot(-k)^{-1}=k\cdot k=k^2=-1$, so $-1$ is a commutator, and multiplicativity gives $\lambda(iji^{-1}j^{-1})=\lambda(i)\lambda(j)\lambda(i)^{-1}\lambda(j)^{-1}=1$. [F1, given, algebra]

2.1 The prescription $\theta(1)=1$, $\theta(-1)=-1$ defines a linear character of $Z(Q_8)$: products involving $1$ satisfy $\theta(1z)=\theta(z1)=\theta(z)=\theta(1)\theta(z)$, and the remaining product satisfies $\theta((-1)(-1))=\theta(1)=1=(-1)^2=\theta(-1)\theta(-1)$. These are all four pairs in $Z(Q_8)\times Z(Q_8)$, so the map is multiplicative. It acts on the nonzero one-dimensional space $\mathbb C$, which has no nonzero proper subspace, hence is irreducible. [F1, step 1.1, given]

3.1 The character $\theta$ is $Q_8$-invariant: for $g\in Q_8$ and $z\in Z(Q_8)$ one has ${}^g\theta(z)=\theta(g^{-1}zg)=\theta(z)$ because $z$ is central, so ${}^g\theta=\theta$ for every $g$ and the inertia group of $\theta$ is all of $Q_8$ by [F2]. [F2, step 1.1, step 2.1]

4.1 Therefore $\theta$ is invariant but does not extend to a linear character of $Q_8$: a linear extension would be a homomorphism $\lambda:Q_8\to\mathbb C^\times$ with $\lambda|_{Z(Q_8)}=\theta$ by [F3] and [A1], in particular $\lambda(-1)=\theta(-1)=-1$, whereas step 1.2 forces $\lambda(-1)=1$ for every linear character. Hence no extension of $\theta$ to $Q_8$ exists, and the invariance established in step 3.1 is not sufficient for extendibility. [A1, F3, step 3.1, step 1.2, algebra]

5.1 By [F4] the failure of extension recorded in step 4.1 is exactly the statement that the Clifford obstruction class of $\theta$ in $H^2(Q_8/\{\pm1\},\mathbb C^\times)$ is nonzero; this is a genuine obstruction, since [F5] exhibits a nonzero class in that same cohomology group, and it shows that the invariance hypothesis alone cannot replace the split hypothesis of the little group method. The character $\theta$ is the central character of the faithful two-dimensional representation of $Q_8$, so the example is exactly the nonsplit counterpart of the extendible invariant types. [F4, F5, step 4.1] ∎
