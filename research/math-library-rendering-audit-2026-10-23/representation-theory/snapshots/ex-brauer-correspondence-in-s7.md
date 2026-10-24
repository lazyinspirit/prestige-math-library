---
id: ex-brauer-correspondence-in-s7
kind: example
title: Brauer correspondence for a defect-D8 block of S7 in characteristic 2
deps: ["thm-brauer-first-main-theorem", "prop-principal-block-has-sylow-defect", "thm-blocks-partition-ordinary-and-brauer-irreducible-characters", "thm-kg-is-local-iff-g-is-a-p-group", "thm-defect-groups-are-maximal-brauer-support", "def-brauer-homomorphism-for-a-p-subgroup"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Craven, The Brauer Correspondence, §1.6 example for S7, pp. 13–16
      url: https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Let $k$ be a splitting residue field of characteristic $2$ for $G=S_7$ and its subgroups. Put $D=\langle(12),(1324)\rangle$, acting on $\{1,2,3,4\}$. Then $D\cong D_8$ and $N_G(D)=D\times S_3$, where $S_3$ acts on $\{5,6,7\}$. Its unique nonprincipal block has defect group $D$ and corresponds to the unique block of $kS_7$ with defect group $D$. The principal local block has the larger Sylow defect $D\times C_2$. These assertions are choice-free.

## Facts & Assumptions

**Given:** The field, group and subgroup in the example.

[F1] [[thm-brauer-first-main-theorem]] gives the fixed-defect bijection.

[F2] [[prop-principal-block-has-sylow-defect]] identifies principal defects.

[F3] [[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]] identifies the principal block through the trivial module.

[F4] [[thm-kg-is-local-iff-g-is-a-p-group]] makes finite $p$-group algebras local, hence without nontrivial idempotents.

[F5] [[thm-defect-groups-are-maximal-brauer-support]] detects defect by maximal nonzero Brauer projection.

[F6] [[def-brauer-homomorphism-for-a-p-subgroup]] deletes coefficients outside a centralizer.

## Proof

1.1 Write $s=(12)$ and $r=(1324)$. Then $r^4=s^2=1$, $srs=r^{-1}$ and $s\notin\langle r\rangle$, giving exactly the eight elements $r^j,sr^j$. A normalizer preserves the common fixed set $\{5,6,7\}$, so it is $N_{S_4}(D)\times S_3$. The first factor has order $8$ or $24$ by divisibility. It is not $S_4$: conjugating $(12)$ to $(13)$ leaves $D$, whose only transpositions are $(12)$ and $(34)$. Therefore it is $D$. [algebra]

1.2 In the last $S_3$ write $a^3=t^2=1$, $tat=a^{-1}$. The element $e_0=1+a+a^2$ is a central idempotent in characteristic $2$. Its ideal has basis $e_0,te_0$ and is $kC_2$, since $(te_0)^2=e_0$. The complementary idempotent is $e_1=a+a^2$. To identify its four-dimensional ideal, represent $a$ by $A=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ and $t$ by $T=\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Direct multiplication gives $A^3=T^2=I$, $TAT=A^2$ and $I+A+A^2=0$. The image contains $E_{22}=A+T$, $E_{11}=I+E_{22}$, $E_{21}=AT+I$, and $E_{12}=T+E_{21}$. Thus it is all $M_2(k)$; dimension gives $kS_3e_1\cong M_2(k)$. [algebra]

2.1 Hence $kN\cong k[D\times C_2]\times M_2(kD)$. F4 makes the first factor local and gives no nontrivial idempotents in $kD$. A central matrix commuting with every matrix unit is a scalar matrix over $Z(kD)$; thus the second factor has no nontrivial central idempotents either. These are exactly the two blocks. Augmentation is $1$ on $e_0$ and $0$ on $e_1$, so F3 places the trivial module in the first, the principal block. Its defect is $D\times\langle t\rangle$ by F2. [F2, F3, F4, step 1.1, step 1.2, algebra]

2.2 Regard $e_1=a+a^2$ as an element of $kN$. Both support elements centralize $D$, so $\operatorname{Br}_D(e_1)=e_1\ne0$. If a $2$-subgroup $R$ of $N$ properly contains $D$, its projection to $S_3$ is a subgroup of order $2$. Its involution centralizes neither $a$ nor $a^2$. Thus neither support element centralizes $R$ and $\operatorname{Br}_R(e_1)=0$. F5 and F6 prove that $D$ is a defect group of the second block. [F5, F6, step 1.1, step 1.2, algebra]

3.1 F1 now gives exactly one global block having $D$ as a defect group, paired with this nonprincipal local block. It is not the global principal block: the $2$-part of $7!=5040$ is $16$, whereas $|D|=8$, and F2 gives Sylow defect for the principal block. The larger local principal defect has order $16$ as well. All idempotents and matrix units were displayed; there is no zero block, empty correspondence, endpoint parameter or choice operation in this calculation. The correspondence is bijective in both directions by F1. [F1, F2, step 2.1, step 2.2, algebra] ∎
