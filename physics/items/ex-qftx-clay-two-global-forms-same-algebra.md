---
id: ex-qftx-clay-two-global-forms-same-algebra
kind: example
title: Two global forms with the same simple Lie algebra
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-yang-mills-clay-problem-examples
dependency_level: 0
deps: []
dependency_roles: {}
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: "Arthur Jaffe and Edward Witten, Quantum Yang-Mills Theory, §4, The Problem"
      url: "https://www.claymath.org/library/monographs/MPPc.pdf"
    - title: "Arthur Jaffe, Constructive Quantum Field Theory, §8, PDF p. 14, For the Millennium: Gauge Theory in Four Dimensions"
      url: "https://arthurjaffe.net/Assets/pdf/CQFT.pdf"
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

Let $\mathbb{H}$ be the real quaternion algebra with basis $1,i,j,k$, multiplication $i^2=j^2=k^2=ijk=-1$, and norm $|a+bi+cj+dk|^2=a^2+b^2+c^2+d^2$. A Lie group is a finite-dimensional smooth manifold with smooth multiplication and inversion; its Lie algebra is its tangent space at the identity with the bracket induced by left-invariant vector fields. Let $SU(2)$ be the group of unit quaternions and $SO(3)$ the group of linear maps of $\operatorname{Im}\mathbb{H}=\operatorname{span}_{\mathbb R}\{i,j,k\}\cong\mathbb R^3$ preserving the Euclidean inner product and having determinant $+1$. A Lie algebra is simple if it is nonabelian and has no nonzero proper ideals. For this example, a compact simple gauge group means a compact connected Lie group with a simple Lie algebra. Its global form means the Lie group itself, including its central quotient, rather than only its Lie algebra. The kernel of a group homomorphism is the inverse image of the identity, and the center is the set of elements commuting with every group element. The map $\pi:SU(2)\to SO(3)$ defined by $\pi(q)x=qxq^{-1}$ is a surjective homomorphism with kernel $\{1,-1\}$; its differential identifies the simple Lie algebras of $SU(2)$ and $SO(3)$, while the groups are distinct. Therefore, a proof of a claim quantified over every compact simple gauge group at $SU(2)$ alone does not discharge the separate $SO(3)$ case.

## Example references

[Arthur Jaffe and Edward Witten, “Quantum Yang-Mills Theory,” §4, “The Problem”](https://www.claymath.org/library/monographs/MPPc.pdf)

[Arthur Jaffe, “Constructive Quantum Field Theory,” §8, PDF p. 14, “For the Millennium: Gauge Theory in Four Dimensions”](https://arthurjaffe.net/Assets/pdf/CQFT.pdf)

## Facts & Assumptions

**Given:** Use the quaternion algebra and Lie-group conventions stated in the Example.

[A1] Give $\operatorname{Im}\mathbb H$ the Euclidean inner product denoted $u\cdot v$ for which $i,j,k$ are an orthonormal basis. For $q=a+u$ with $a\in\mathbb R$ and $u\in\operatorname{Im}\mathbb H$, define $\overline q=a-u$. For $u,v\in\operatorname{Im}\mathbb H$, define $u\times v=\tfrac12(uv-vu)$, the oriented Euclidean cross product under the ordered basis $i,j,k$.

## Proof

1.1 Write $p=a+u$ and $q=b+v$ with $a,b\in\mathbb R$, $u=u_1i+u_2j+u_3k$, and $v=v_1i+v_2j+v_3k$. From the stated quaternion multiplication, $uv=-u\cdot v+u\times v$; in coordinates, $u\times v=(u_2v_3-u_3v_2)i+(u_3v_1-u_1v_3)j+(u_1v_2-u_2v_1)k$. Hence $u\cdot(u\times v)=v\cdot(u\times v)=0$ and $|u\times v|^2=|u|^2|v|^2-(u\cdot v)^2$, by expansion of these coordinates. Therefore $pq=(ab-u\cdot v)+(av+bu+u\times v)$, and $|pq|^2=(ab-u\cdot v)^2+|av+bu+u\times v|^2=(a^2+|u|^2)(b^2+|v|^2)=|p|^2|q|^2$. The same multiplication table gives $q\overline q=\overline q q=|q|^2$, so a unit quaternion has inverse $q^{-1}=\overline q$ and $|q^{-1}|=1$. [given, A1, algebra]

1.2 If $\pi(q)$ is the identity, then $q$ commutes with every imaginary quaternion. Commuting with both $i$ and $j$ forces $q$ to be real, so the unit condition gives $q=\pm1$; hence $\ker\pi=\{1,-1\}$. The differential at the identity sends $v\in\operatorname{Im}\mathbb{H}$ to the linear map $x\mapsto[v,x]=2v\times x$. It is injective because $v\times x=0$ for every $x$ forces $v=0$. The tangent space of $SU(2)\cong S^3$ has dimension three, and the tangent space of $SO(3)$ at the identity consists of the skew-symmetric $3\times3$ matrices, also dimension three; therefore the differential is an isomorphism. It preserves brackets because it is the differential of a Lie-group homomorphism. The cross-product bracket is simple: if an ideal contains $v\ne0$, then it contains $w\times v$ for every $w$, which spans $v^\perp$; together with $v$ this is all of $\mathbb R^3$. Therefore both Lie algebras are nonabelian and simple. [given, A1, algebra]

2.1 For $q=a+u$ unit and $x\in\operatorname{Im}\mathbb H$, the scalar part of $qxq^{-1}$ is $-a(u\cdot x)+(ax+u\times x)\cdot u=0$, so conjugation preserves $\operatorname{Im}\mathbb H$. It preserves the norm because $|q x q^{-1}|=|q||x||q^{-1}|=|x|$ by step 1.1. The map $q\mapsto\pi(q)$ is a homomorphism by associativity. Its determinant is $+1$: it depends continuously on $q$, takes values in $\{-1,+1\}$, and equals $+1$ at $q=1$; the unit quaternions form the connected sphere $S^3$. For any $R\in SO(3)$, its eigenvalues have modulus one and nonreal eigenvalues occur in conjugate pairs. If there is a nonreal pair, the remaining real eigenvalue is $+1$ because the determinant is $+1$; if all eigenvalues are real, they are $\pm1$ and their product $+1$ forces at least one eigenvalue $+1$. Thus $R$ has a unit fixed axis $n$. Its restriction to $n^\perp$ preserves orientation, since its determinant there equals $\det R=1$, and so it is a planar rotation through some angle $\theta$. Expanding with $n x=-n\cdot x+n\times x$ gives $q x q^{-1}=\cos(\theta)x+\sin(\theta)(n\times x)+(1-\cos(\theta))(n\cdot x)n$ for $q=\cos(\theta/2)+n\sin(\theta/2)$, which is precisely that rotation. Thus $\pi$ is onto. [given, A1, step 1.1, algebra]

3.1 The center of $SU(2)$ is $\{\pm1\}$, since an element commuting with every imaginary quaternion must be real. If $R$ is in the center of $SO(3)$, it commutes with every half-turn about a unit axis $n$; each half-turn has $\mathbb R n$ as its $+1$ eigenspace, so $R$ preserves every line. In particular, in the basis $i,j,k$ it sends each basis vector to itself or its negative; preserving the lines spanned by $i+j$ and $j+k$ forces the three signs equal. Thus $R=\pm I$, and only $I$ has determinant $+1$. The centers differ, so the groups are not isomorphic. The unit quaternions form the compact connected sphere $S^3$, and $SO(3)$ is its continuous surjective image under $\pi$, hence is compact and connected as well. The differential is an isomorphism by step 1.2, so these are distinct compact global forms with isomorphic simple Lie algebras. [given, A1, step 2.1, step 1.2, algebra]

4.1 The universal group quantifier includes both of these distinct groups. A proof with the fixed value $G=SU(2)$ establishes only that instance; it contains no argument for the separate value $G=SO(3)$. Hence it does not by itself establish the universally quantified claim. [given, step 3.1, algebra] ∎

## Remarks

This example clarifies the universal group scope of Four-dimensional Yang–Mills existence and mass gap; the open problem is only a contextual reference and supplies no premise to this proof.

## Remarks references

[[op-qftx-clay-4d-yang-mills-existence-mass-gap|Clay existence and mass-gap problem]]
