---
title: Isolated complex meridian disks inside the product of the dihedral cone
status: published
research_item: lem-author-6f173a9d0001-isolated-meridians
dependency_level: 3
---

## Prerequisites

- [lem-author-6f173a9d0001-dihedral-tits-cone](item-lem-author-6f173a9d0001-dihedral-tits-cone)
- [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites)


## Statement

Let $I=\{a>0\}$ and $H_k=\{b+ka=0\}$ be as in [lem-author-6f173a9d0001-dihedral-tits-cone](item-lem-author-6f173a9d0001-dihedral-tits-cone). Identify the product complement of [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites) with $M=(I+iI)\setminus\bigcup_k H_k^{\mathbb C}$. For every integer $k$ there is a closed disk $D_k\subset I+iI$ meeting $H_k^{\mathbb C}$ only at its centre and avoiding every $H_\ell^{\mathbb C}$ for $\ell\ne k$. Its positively oriented boundary $\gamma_k$ lies in $M$, and $L_k(\gamma_k(\theta))=\varepsilon e^{i\theta}$, where $L_k=b+ka$ and $\varepsilon>0$.

## Facts & Assumptions

[F1] **Given:** The cone and root hyperplanes of [lem-author-6f173a9d0001-dihedral-tits-cone](item-lem-author-6f173a9d0001-dihedral-tits-cone), with the product topology of [def-complement-interface-artin-tits-prerequisites](item-def-complement-interface-artin-tits-prerequisites). **Goal:** Construct disks without replacing $I+iI$ by a larger tube domain.

## Proof



**Proof technique:** direct.

1.1 Extend $a,b$ complex linearly. Choose the centre $z_k$ with $a(z_k)=1+i$ and $b(z_k)=-k(1+i)$. Both its real and imaginary parts belong to $I$. Choose a real vector $v$ with $a(v)=0$ and $b(v)=1$, and set $D_k=\{z_k+\zeta v:|\zeta|\leq\varepsilon\}$ for $0<\varepsilon<1$. All its points have real and imaginary $a$-coordinate equal to $1$, so the whole disk lies in $I+iI$. [F1, algebra]

2.1 On this disk $L_\ell=(\ell-k)(1+i)+\zeta$. For $\ell\ne k$ the first summand has modulus at least $\sqrt2>\varepsilon$, so $L_\ell$ never vanishes. For $\ell=k$ it vanishes exactly at $\zeta=0$. The boundary parametrisation $\zeta=\varepsilon e^{i\theta}$ has the required properties. [step 1.1, algebra] ∎
