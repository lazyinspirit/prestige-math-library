---
id: lem-finite-commutator-transfer-vanishes
kind: lemma
title: Transfer from a finite group to its commutator quotient vanishes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-transfer-homomorphism-for-a-finite-index-subgroup
  - def-augmentation-map-and-augmentation-ideal-of-a-group-ring
  - lem-subgroups-of-free-abelian-groups-are-free
proof_strategy: direct
axiom_use: AC is explicitly assumed for the cited free-subgroup interface. All representatives and algebraic constructions in this finite-group proof use only finite choices.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VI §7, Theorem 7.6 and Lemma 7.7, printed pp.410–413; the finite-group-ring determinant argument is reconstructed below."
verification: {}
---

## Statement

Assume the Axiom of Choice. For every finite group $G$, write $G'=[G,G]$ and $G''=[G',G']$. The transfer for the finite-index subgroup $G'$ and the quotient map $G'\to G'/G''$ is the zero homomorphism
$$\operatorname{Ver}:G/G'\longrightarrow G'/G''.$$
The formula applies to trivial groups and does not assume $G'$ is cyclic or central.

## Facts & Assumptions

**Given:** A finite group $G$, its commutator subgroups and the stated Axiom of Choice.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] The transfer is the finite coset product associated to a homomorphism out of a finite-index subgroup. [[def-transfer-homomorphism-for-a-finite-index-subgroup]]

[F2] The augmentation ideal $I_H$ of an integral group ring is the kernel of the coefficient-sum homomorphism. [[def-augmentation-map-and-augmentation-ideal-of-a-group-ring]]

[F3] Under AC every subgroup of a free abelian group is free. [[lem-subgroups-of-free-abelian-groups-are-free]]

## Proof

**Proof technique:** explicit augmentation-ideal transfer formula and a determinant argument.

1.1 First pass to $G/G''$. The coset-product formula [F1] commutes with this quotient: take the images of a finite transversal and observe that every factor maps to the corresponding factor. It therefore suffices to assume $H=G'$ is abelian and to prove that the transfer $G/H\to H$ is zero. Put $R=\mathbb Z[G]$, $I=I_G$, $J=I_H\subseteq R$ and $\delta g=g-1$. The quotient $R/RJ$ is the commutative group ring $\mathbb Z[G/H]$, because $H$ is normal and $G/H$ is abelian. [F1, F2, given, algebra]

2.1 Choose a finite left transversal $T$ for $H$ in $G$. The abelian group $J+IJ$ has the basis $t(h-1)$ with $t\in T$ and $1\ne h\in H$: it spans because $t(h-1)=(h-1)+(t-1)(h-1)$, and linear independence follows by comparing the coefficients of the distinct group elements $th$ and of the representatives $t$. The homomorphism sending each basis element $t(h-1)$ to $h$ modulo $H'$ kills $IJ$: for $g=th'$ one has $(g-1)(h-1)=t(h'h-1)-t(h'-1)-(h-1)$. Hence it gives an inverse to $hH'\mapsto h-1$ and identifies $H/H'$ with $(J+IJ)/IJ$. [F2, step 1.1, choose, construct, algebra]

2.2 Choose a finite ordered generating list $g_1,\dots,g_n$ for $G$. The induced surjection $\mathbb Z^n\to A=G/H$ has a finite-index kernel. By [F3] this kernel has a basis whose $n\times n$ integer coordinate matrix $m=(m_{ik})$ has positive determinant $|A|$: a finite-index lattice has full rank, and elementary integer row and column operations reduce its matrix to diagonal form, whose determinant is its index. For each column choose $h_k\in H$ so that $g_1^{m_{1k}}\cdots g_n^{m_{nk}}h_k=1$ in $G$. [A1, F3, step 1.1, given, choose, algebra]

3.1 For $x\in G$ write $xt=t'h_t$ with $t'\in T$ and $h_t\in H$. The $t'$ run once through $T$. Consequently $$(x-1)\sum_{t\in T}t=\sum_{t\in T}t'(h_t-1)\in J+IJ,$$ because the representative terms cancel. Under step 2.1 this element maps to the product of the $h_t$ in $H/H'$, exactly the left-coset transfer in [F1]. Thus it suffices to prove $(x-1)\sum_{t\in T}t\in IJ$ for every $x\in G$. [F1, step 2.1, construct, algebra]

3.2 Work in the right module $I/IJ$ over $R/RJ=\mathbb Z[A]$. The elements $\delta g_i$ generate it: $\delta(ab)=\delta a+\delta b+\delta a\,\delta b$ and $\delta(a^{-1})=-\delta a\,a^{-1}$ reduce any word. The same identities write each relation in step 2.2 as $$\sum_i (\delta g_i)\mu_{ik}=0\quad\text{in }I/IJ,$$ with $\mu_{ik}\in\mathbb Z[A]$ and augmentation $m_{ik}$. Indeed $h_k\in G'$ is a finite product of commutators, and every commutator has $h-1\in I^2$; its contribution can therefore be expressed using coefficients in the augmentation ideal of $\mathbb Z[A]$, whose augmentation is zero. This argument includes negative exponents by the displayed inverse identity. [F2, step 1.1, step 2.2, algebra]

4.1 Let $\mu=\det(\mu_{ik})\in\mathbb Z[A]$. The adjugate identity over the commutative ring $\mathbb Z[A]$ and step 3.2 imply $(\delta g_i)\mu=0$ in $I/IJ$ for each $i$, hence $(\delta x)\mu=0$ for every $x\in G$ because the $\delta g_i$ generate that right module. Reducing modulo $RJ$ shows $(a-1)\mu=0$ for every $a\in A$. If $\mu=\sum_{a\in A}c_a a$, invariance under all translations forces every $c_a$ to equal one integer $c$. The augmentation is $\det(m)=|A|$ by step 2.2, so $c=1$ and $\mu=\sum_{a\in A}a$. The image of $\sum_{t\in T}t$ in $R/RJ$ is this same element. Therefore $(x-1)\sum_{t\in T}t\in IJ$ for every $x$. By step 3.1 the transfer is zero. The case $G=1$ is immediate, and if $H=1$ the target is zero. [F2, step 3.1, step 2.2, step 3.2, algebra] ∎
