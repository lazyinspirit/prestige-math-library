---
id: ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition
kind: example
title: "$\\mathbb C[Q_8]$ and $\\mathbb C[\\operatorname{Dih}(C_4)]$ both decompose as $\\mathbb C^4\\times M_2(\\mathbb C)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-dihedral-groups-as-semidirect-products, def-quaternion-group-of-order-eight, def-quaternions, prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two, cor-sum-of-squares-formula-for-irreducible-degrees, thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order, thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3 Section 3.4"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
pipeline_run: null
---

## Example

Both order-eight nonabelian groups
$Q_8$ and $\operatorname{Dih}(C_4)$ have the same complex Wedderburn type:

$$\mathbb C[Q_8]\cong \mathbb C^4\times M_2(\mathbb C)\qquad\text{and}\qquad \mathbb C[\operatorname{Dih}(C_4)]\cong \mathbb C^4\times M_2(\mathbb C).$$

## Facts & Assumptions

**Given:** The quaternion group $Q_8=\{1,-1,i,-i,j,-j,k,-k\}$ and the dihedral group $D=\operatorname{Dih}(C_4)=\langle r,s\rangle$.

[L1] The dihedral group $D$ has order $8$, every element is $r^a$ or $r^as$ with $0 \le a < 4$, and $r^4=s^2=1$ with $srs^{-1}=r^{-1}$ ([[cor-dihedral-groups-as-semidirect-products]]).

[L2] In $Q_8$, the elements are $\{1,-1,i,-i,j,-j,k,-k\}$ and the quaternion multiplication table gives $i^2=j^2=k^2=-1$, $ij=k$, $jk=i$, $ki=j$, $ji=-k$, $kj=-i$, and $ik=-j$ ([[def-quaternion-group-of-order-eight]], [[def-quaternions]]).

[L3] The group $Q_8$ has order $8$, the element $-1$ is its unique element of order $2$, and each of $\pm i,\pm j,\pm k$ has order $4$ ([[prop-the-quaternion-group-has-order-eight-and-a-unique-element-of-order-two]]).

[L4] Over an algebraically closed field of characteristic prime to $|G|$, the number of irreducible representations equals the number of conjugacy classes ([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).

[L5] Under the same hypotheses, the irreducible degrees satisfy the sum-of-squares formula ([[cor-sum-of-squares-formula-for-irreducible-degrees]]).

[L6] Under the same hypotheses, the group algebra is a product of full matrix algebras over the base field ([[thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field]]).

## Verification

**Proof technique:** direct.

1.1 In $Q_8$, the elements $1$ and $-1$ are central by [L2]. Also $jij^{-1}=j i (-j)=(-k)(-j)=kj=-i$, so $i$ is conjugate to $-i$; similarly $kik^{-1}=-i$, and conjugation by $\pm1$ or $\pm i$ fixes $i$. Thus the conjugacy class of $i$ is $\{i,-i\}$. The same calculation with cyclic permutations of $i,j,k$ gives the further classes $\{j,-j\}$ and $\{k,-k\}$. Hence the conjugacy classes of $Q_8$ are $$\{1\},\ \{-1\},\ \{i,-i\},\ \{j,-j\},\ \{k,-k\}.$$ [L2, L3, given, algebra]

1.2 In $D$, the relations of [L1] show that $r^2$ is central, while $$srs^{-1}=r^{-1}=r^3,\qquad rsr^{-1}=r^2s,\qquad r(rs)r^{-1}=r^3s.$$ Therefore the conjugacy classes of $D$ are $$\{1\},\ \{r^2\},\ \{r,r^3\},\ \{s,r^2s\},\ \{rs,r^3s\}.$$ So both $Q_8$ and $D$ have five conjugacy classes. [L1, given, algebra]

2.1 By [L4], each group has five irreducible complex representations. By [L5], their degrees $d_1,\ldots,d_5$ satisfy $$d_1^2+\cdots+d_5^2=8.$$ Since every $d_i \ge 1$, the only possible multiset is $1,1,1,1,2$. [L4, L5, step 1.1, step 1.2, given, algebra]

3.1 Applying [L6] to each group gives one $2\times2$ factor and four $1\times1$ factors, so $$\mathbb C[Q_8]\cong \mathbb C^4\times M_2(\mathbb C)\qquad\text{and}\qquad \mathbb C[\operatorname{Dih}(C_4)]\cong \mathbb C^4\times M_2(\mathbb C).$$ [L6, step 2.1, given, algebra] ∎
