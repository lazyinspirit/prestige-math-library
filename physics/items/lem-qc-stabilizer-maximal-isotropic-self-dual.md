---
id: lem-qc-stabilizer-maximal-isotropic-self-dual
kind: lemma
title: A maximal stabilizer label space is self-dual
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-qc-binary-symplectic-form
  - def-vector-space
  - def-dimension
  - thm-rank-nullity
  - thm-dimension-of-a-linear-subspace
justified_by: []
dependency_level: 9
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1"
      url: https://arxiv.org/pdf/1907.09415
    - title: Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits, §II
      url: https://arxiv.org/pdf/quant-ph/0406196
---

## Statement

Let $V=\mathbb F_2^{2n}$ have the standard symplectic form
$\omega((x,z),(x',z'))=x\cdot z'+z\cdot x'$. If $L\le V$ is isotropic and
$r=\dim L$, then

$$\dim L^\perp=2n-r.$$

Consequently $r\le n$, and if $r=n$ then

$$L^\perp:=\{v\in V:\omega(v,\ell)=0\text{ for every }\ell\in L\}=L.$$

## Facts & Assumptions

**Given:** A finite-dimensional space $V=\mathbb F_2^{2n}$, the stated form,
and an isotropic subspace $L\le V$ of dimension $r$.

[F1] For $n\ge1$, [[def-qc-binary-symplectic-form]] supplies the displayed
coordinate formula and bilinearity, alternation, and nondegeneracy. For $n=0$,
$V=\{0\}$ and the displayed form is the unique zero form.

[F2] [[thm-rank-nullity]]: for a linear map on finite-dimensional spaces,
dimension of the domain is nullity plus rank.

[F3] [[thm-dimension-of-a-linear-subspace]]: every finite independent list
extends to a basis in finite dimension without choice, and a subspace with
the same dimension as its ambient space equals the ambient space.

## Proof

**Given:** The data in the Statement.

1.1 If $n=0$, then $V=L=L^\perp=\{0\}$ and $r=0$, so $\dim L^\perp=0=2n-r$, $r\le n$, and $L^\perp=L$. Hence the result holds. [given, F1, algebra]

1.2 Assume now $n\ge1$. If $v=(x,z)\in V$ pairs to zero with every vector, pairing with $(e_j,0)$ and $(0,e_j)$ gives $z_j=x_j=0$ for every $j$. More generally, for any linear functional $\phi$ on $V$, set $a_j=\phi(e_j,0)$ and $b_j=\phi(0,e_j)$. Then $v=(b,a)$ satisfies $\omega(v,(x',z'))=b\cdot z'+a\cdot x'=\phi(x',z')$ by linearity. Thus $v\mapsto\omega(v,\cdot)$ is both injective and onto. [F1, given, algebra]

2.1 Put $r=\dim L$ and choose a basis $\ell_1,\ldots,\ell_r$ of $L$. Extend it to a basis of $V$ using [F3]. For any $y\in\mathbb F_2^r$, define a linear functional on this basis by $\phi(\ell_j)=y_j$ and by zero on the added basis vectors. Step 1.2 supplies $v\in V$ with $\omega(v,\cdot)=\phi$, so $T:V\to\mathbb F_2^r$, $T(v)=(\omega(v,\ell_j))_{j=1}^r$, is onto. Its kernel is $L^\perp$, and [F2] gives $\dim L^\perp=2n-r$. This includes $r=0$, where both the basis and $\mathbb F_2^r$ are empty or zero-dimensional. [F2, F3, step 1.2, choose]

3.1 For $n\ge1$, isotropy gives $L\subseteq L^\perp$. Comparing dimensions with step 2.1 gives $r\le2n-r$, hence $r\le n$. If $r=n$, both subspaces have dimension $n$, so [F3] gives $L=L^\perp$. This argument uses only finite basis extension and no choice principle. [given, F3, step 2.1, algebra]

4.1 Step 1.1 proves the result for $n=0$, and step 1.2 and step 2.1 and step 3.1 prove it for $n\ge1$. These cases exhaust all dimensions in the Statement. [step 1.1, step 1.2, step 3.1] ∎

## Sources

The symplectic label space and its self-orthogonality are treated in de Wolf
§20.1 and Aaronson–Gottesman §II. The dimension argument above is supplied
locally from the current batch-15 symplectic-form definition; that supplier is
present as a draft body and is not independently accepted.
