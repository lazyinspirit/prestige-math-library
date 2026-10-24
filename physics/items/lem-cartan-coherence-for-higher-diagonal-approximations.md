---
id: lem-cartan-coherence-for-higher-diagonal-approximations
kind: lemma
title: Cartan coherence for higher diagonals
status: published
origin: pipeline
deps: ["lem-natural-higher-diagonal-approximations-on-singular-chains", "def-alexander-whitney-diagonal-approximation", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses", "thm-singular-chain-homotopy-formula"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 3, external-product Cartan comparison, printed pages 24--25
---

## Statement

Work over $\mathbb F_2$. Put $C=C_*(X)$, $E=C_*(Y)$, and let
$A:C_*(X\times Y)\to C\otimes E$ and $S:C\otimes E\to C_*(X\times Y)$ be
Alexander--Whitney and shuffle. If $T$ interchanges the two factors output by
a higher diagonal and $\tau$ regroups

$$
(C\otimes C)\otimes(E\otimes E)\longrightarrow(C\otimes E)\otimes(C\otimes E),
$$

define degree-$i$ maps

$$
L_i=(A\otimes A)D_i^{X\times Y}S,\qquad R_i=\sum_{r+s=i}\tau(D_r^X\otimes T^rD_s^Y).
$$

Let $Q$ interchange the two $C\otimes E$ blocks. There are natural degree-
$(i+1)$ maps $H_i$, with $H_{-1}=0$, such that

$$
L_i-R_i=dH_i+H_i d+(1+Q)H_{i-1}.
$$

These homotopies preserve both relative carriers: for $B\subseteq X$ and
$D\subseteq Y$, they carry $C_*(B)\otimes E$ into
$(C_*(B)\otimes E)^{\otimes2}$ and $C\otimes C_*(D)$ into
$(C\otimes C_*(D))^{\otimes2}$.

## Facts & Assumptions

**Given:** Spaces $X,Y$, their ordinary unnormalized mod-two singular chains, and a fixed natural higher-diagonal system.

[F1] The higher diagonals satisfy $dD_i+D_id=(1+T)D_{i-1}$ ([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F2] The Alexander--Whitney formula is a finite sum of tensor products of face restrictions ([[def-alexander-whitney-diagonal-approximation]]).

[F3] The shuffle $S$ and Alexander--Whitney $A$ are natural chain-homotopy inverses on ordinary unnormalized chains without AC ([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

[F4] A specified homotopy has a finite prism operator satisfying the singular chain-homotopy identity ([[thm-singular-chain-homotopy-formula]]).

[F5] The higher diagonals are natural ([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F6] The higher diagonals preserve the chain complexes of subspaces ([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

## Proof

**Proof technique:** compare two equivariant chain maps in the same explicit fourfold acyclic carrier.

1.1 Record the diagonal on the mod-two $C_2$ resolution. Let $W$ have one free-orbit generator $e_i$ in every degree $i\geq0$, with $de_i=(1+T)e_{i-1}$ and $e_{-1}=0$. Define [given]

$$ \rho(e_i)=\sum_{r+s=i}e_r\otimes T^r e_s. $$

With the diagonal $C_2$ action on $W\otimes W$, this is a chain map. Indeed, expanding $d\rho(e_i)$ makes every term with $r,s>0$ occur twice after the index shifts $(r,s)\mapsto(r-1,s)$ and $(r,s)\mapsto(r,s-1)$; the two endpoint terms that remain are exactly $\rho((1+T)e_{i-1})$. All sums are finite.

1.2 Fix an explicit contraction of every common fourfold model carrier. For a standard simplex $\Delta^m$, let $P_m$ be the prism from its affine contraction to the first vertex. By [F4], $dP_m+P_md=1-j_mp_m$, where $p_m$ collapses to a point and $j_m$ includes that vertex. On the unnormalized point complex, whose degree-$n$ generator is $e_n$, put $a(e_n)=e_{n+1}$ for odd $n$ and $a(e_n)=0$ for even $n$. Directly, $da+ad=1-\eta\epsilon$. Hence [F4]

$$ h_m:=P_m+j_map_m $$

satisfies $dh_m+h_md=1-j_m\eta\epsilon p_m$. On a tensor of four standard simplex complexes use $h_1\otimes1\otimes1\otimes1+e_1\otimes h_2\otimes1\otimes1+ e_1\otimes e_2\otimes h_3\otimes1+e_1\otimes e_2\otimes e_3\otimes h_4$, where each $e_t$ is its augmentation projection. The mixed terms cancel, giving a fixed $h^{(4)}$ with $dh^{(4)}+h^{(4)}d=1-\eta\epsilon$. Thus every positive-degree cycle and every augmentation-zero degree-zero cycle has the specified filling $h^{(4)}z$. Every displayed operator is a finite sum, so this family of contractions is fixed without AC.

2.1 Assemble the two displayed families into equivariant maps. Define $\mathcal L(e_i\otimes z)=L_i(z)$. This is the composite obtained by shuffling $z$ to $X\times Y$, applying the equivariant higher diagonal there, and applying $A$ to its two outputs. Define $\mathcal R$ by first applying $\rho$, then applying the two higher-diagonal systems and finally regrouping with $\tau$. The factor $T^r$ in $R_i$ is precisely the twist in $\rho$. Naturality and the chain-map identities in [F1]--[F3], together with step 1.1, show that both are $C_2$-equivariant chain maps [F1, F3, F5, step 1.1]

$$ W\otimes(C\otimes E)\longrightarrow(C\otimes E)^{\otimes2}, $$

where $C_2$ acts on the target by $Q$.

3.1 Construct the coherent homotopy. Induct first on $i$ and then on $p+q$. Suppose $H_{i-1}$ and the values of $H_i$ on lower-dimensional model generators are known. On the identity model generator $z_{p,q}$ form [step 1.2, step 2.1]

$$ \omega=(L_i-R_i)(z_{p,q})-H_i(dz_{p,q})-(1+Q)H_{i-1}(z_{p,q}). $$

The chain-map equations for $\mathcal L$ and $\mathcal R$ from step 2.1 and the already established lower equations give $d\omega=0$; the two augmentation-preserving maps agree in total degree zero, so the remaining degree-zero case has augmentation zero. Set $H_i(z_{p,q})=h^{(4)}\omega$ and extend to arbitrary $u\otimes v$ by postcomposition. Taking its boundary gives exactly

$$ L_i-R_i=dH_i+H_i d+(1+Q)H_{i-1}. $$

The postcomposition formula proves naturality. The fixed contractions and the lexicographic recursion use no choice principle.

4.1 The construction preserves the stated relative carriers. If $u$ lands in $B\subseteq X$, every occurrence of $u_\#$ in the two maps and in the model filling lands in $C_*(B)$; the other factor remains in $E$. The same argument applies when $v$ lands in $D\subseteq Y$. Linearity gives the assertions for their generated subcomplexes and for their sum. Empty factors give zero complexes; zero chains and $i=0$ are included by $H_{-1}=0$; one-point and degenerate singular simplices remain in the unnormalized model. Hence every boundary case obeys the same equation. [F2, F3, F6, step 1.2, step 3.1] ∎