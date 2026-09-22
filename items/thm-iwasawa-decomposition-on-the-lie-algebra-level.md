---
id: thm-iwasawa-decomposition-on-the-lie-algebra-level
kind: theorem
title: Iwasawa decomposition on the lie algebra level
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, thm-restricted-root-space-decomposition, def-positive-restricted-roots-and-nilpotent-n-algebra, def-restricted-root-and-restricted-root-space, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Proposition 6.43 and its proof, printed pp. 373-374"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, and maximal abelian subspace
$\mathfrak a\subseteq\mathfrak p_0$ with restricted-root system $\Sigma$
([[def-restricted-root-and-restricted-root-space]],
[[thm-restricted-root-space-decomposition]]); let $\Sigma^+$ be a positive
system and let $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$
be the associated nilpotent subalgebra
([[def-positive-restricted-roots-and-nilpotent-n-algebra]]). Then
$\mathfrak g_0$ is the vector-space direct sum
$$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak a\oplus\mathfrak n .$$
Moreover $\mathfrak a$ is abelian, $\mathfrak n$ is nilpotent,
$\mathfrak a\oplus\mathfrak n$ is a solvable Lie subalgebra of $\mathfrak g_0$,
and its derived subalgebra is $[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, maximal abelian $\mathfrak a\subseteq\mathfrak p_0$, restricted roots $\Sigma$, a positive system $\Sigma^+$, and $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is declared as part of the ZFC interface of the restricted-root chain and inherited through the decomposition of [L1]. No selection is made in the argument below.

[L1] $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ with $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ and $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$ ([[thm-restricted-root-space-decomposition]]).

[L2] For every $H\in\mathfrak a$ and every restricted root $\lambda$ the endomorphism $\operatorname{ad}H$ acts on $\mathfrak g_0^\lambda$ by the scalar $\lambda(H)$; $\Sigma$ is finite, so a positive system $\Sigma^+$ is cut out by a regular $H_0\in\mathfrak a$ with $\lambda(H_0)>0$ for all $\lambda\in\Sigma^+$, and the numbers $\lambda(H_0)$, $\lambda\in\Sigma^+$, are finitely many positive reals ([[def-positive-restricted-roots-and-nilpotent-n-algebra]], [[def-restricted-root-and-restricted-root-space]]).

[L3] $\mathfrak k_0\cap\mathfrak p_0=0$ and $\theta$ is the identity on $\mathfrak k_0$ and minus the identity on $\mathfrak p_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 $\mathfrak n$ is a Lie subalgebra of $\mathfrak g_0$: if $\lambda,\mu\in\Sigma^+$ then $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$ by [L1], and $\mathfrak g_0^{\lambda+\mu}=0$ unless $\lambda+\mu\in\Sigma$, in which case $(\lambda+\mu)(H_0)=\lambda(H_0)+\mu(H_0)>0$ and $\lambda+\mu\in\Sigma^+$; hence $[\mathfrak n,\mathfrak n]\subseteq\mathfrak n$. [L1, L2, algebra]

1.2 $\mathfrak n$ is nilpotent: if $\Sigma^+=\emptyset$ then $\mathfrak n=0$ and nilpotency is trivial, so assume $\Sigma^+\ne\emptyset$; let $m=\min\{\lambda(H_0):\lambda\in\Sigma^+\}>0$ and $M=\max\{\lambda(H_0):\lambda\in\Sigma^+\}<\infty$ by [L2]; every iterated bracket of $k$ elements of $\mathfrak n$ lies in $\bigoplus\mathfrak g_0^{\lambda_1+\dots+\lambda_k}$ with $\lambda_j\in\Sigma^+$, and this sum is $0$ unless $\lambda_1+\dots+\lambda_k\in\Sigma\cup\{0\}$; but its value at $H_0$ is at least $km>0$, so it is not $0$ as a functional on the regular element $H_0$, and if it were a restricted root it would lie in $\Sigma^+$ and its value at $H_0$ would be at most $M$; hence $km\le M$, so for $k>M/m$ every iterated bracket of $k$ elements of $\mathfrak n$ vanishes and the descending central series of $\mathfrak n$ reaches $0$. [L1, L2, algebra]

1.3 $\mathfrak k_0\cap(\mathfrak a\oplus\mathfrak n)=0$: let $X\in\mathfrak k_0\cap(\mathfrak a\oplus\mathfrak n)$; write $X=H+Y$ with $H\in\mathfrak a$ and $Y\in\mathfrak n$, and note that $\theta X=X$ while $\theta H=-H$ and $\theta Y\in\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^{-\lambda}$; hence $\theta X=-H+\theta Y$, and the direct sum decomposition of $\mathfrak g_0$ into $\mathfrak g_0^0$ and the restricted-root spaces, applied to the two expressions $X=H+Y$ and $\theta X=-H+\theta Y$ for the same element, gives $H=-H$, that is $H=0$, and $\theta Y=Y$; then $Y\in\mathfrak n\cap\theta\mathfrak n=0$ by [L1] because the direct sum is over the disjoint sets of positive and negative roots; hence $X=0$, and $X\in\mathfrak k_0\cap\mathfrak p_0=0$ by [L3]. [L1, L3, algebra]

1.4 $\mathfrak k_0+\mathfrak a+\mathfrak n=\mathfrak g_0$: let $X\in\mathfrak g_0$ and write $X=X_0+\sum_{\lambda\in\Sigma}X_\lambda$ with $X_0\in\mathfrak g_0^0$ and $X_\lambda\in\mathfrak g_0^\lambda$; by [L1] write $X_0=H+X_{\mathfrak m}$ with $H\in\mathfrak a$ and $X_{\mathfrak m}\in\mathfrak m\subseteq\mathfrak k_0$, and put $Z_1=X_{\mathfrak m}+\sum_{\lambda\in\Sigma^+}(X_{-\lambda}+\theta X_{-\lambda})$, $Z_2=H$ and $Z_3=\sum_{\lambda\in\Sigma^+}(X_\lambda-\theta X_{-\lambda})$; then $Z_1\in\mathfrak k_0$ because each $X_{-\lambda}+\theta X_{-\lambda}$ is fixed by $\theta$ and $X_{\mathfrak m}\in\mathfrak m\subseteq\mathfrak k_0$ by [L1] and [L3], $Z_2\in\mathfrak a$, and $Z_3\in\mathfrak n$ because $X_\lambda\in\mathfrak g_0^\lambda$ and $\theta X_{-\lambda}\in\mathfrak g_0^\lambda$ by [L1]; since $Z_1+Z_2+Z_3=X$, the sum $\mathfrak k_0+\mathfrak a+\mathfrak n$ is all of $\mathfrak g_0$. [L1, L3, algebra]

2.1 $\mathfrak a$ normalizes $\mathfrak n$: for $\lambda\in\Sigma^+$ and $H\in\mathfrak a$ with $\lambda(H)\ne0$ the map $X\mapsto[H,X]$ on $\mathfrak g_0^\lambda$ is multiplication by the nonzero scalar $\lambda(H)$, hence is surjective onto $\mathfrak g_0^\lambda$; since such $H$ exist and $[H,\mathfrak g_0^\lambda]\subseteq\mathfrak g_0^\lambda$ by [L1], $[\mathfrak a,\mathfrak g_0^\lambda]=\mathfrak g_0^\lambda$ for every $\lambda\in\Sigma^+$ and $[\mathfrak a,\mathfrak n]=\mathfrak n$; therefore $\mathfrak a\oplus\mathfrak n$ is a subalgebra with $[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=[\mathfrak a,\mathfrak n]+[\mathfrak n,\mathfrak n]=\mathfrak n$, since $[\mathfrak a,\mathfrak a]=0$ and $[\mathfrak n,\mathfrak n]\subseteq\mathfrak n$. [L1, L2, step 1.1, algebra]

3.1 By steps 1.3 and 1.4 the sum $\mathfrak k_0+\mathfrak a+\mathfrak n$ equals $\mathfrak g_0$ and its intersection in pairs is zero, so $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak a\oplus\mathfrak n$ is a direct sum; $\mathfrak a$ is abelian by definition, $\mathfrak n$ is nilpotent by step 1.2, $\mathfrak a\oplus\mathfrak n$ is a subalgebra with derived subalgebra $[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$ by step 2.1, and it is solvable because its derived series begins $\mathfrak a\oplus\mathfrak n\supseteq\mathfrak n$ and then coincides with the derived series of the nilpotent algebra $\mathfrak n$, which reaches $0$. [step 2.1, step 1.2, step 1.3, step 1.4, algebra] ∎
