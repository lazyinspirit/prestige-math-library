---
id: lem-wreath-double-power-coefficient-symmetry
kind: lemma
title: Wreath double-power comparison and coefficient transposition
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: ["lem-equivariant-p-fold-external-power-and-diagonal", "lem-free-cyclic-resolution-and-transfer-for-power-operations", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VIII section 1, opening through Lemma 1.3, printed pages 115--118
---

## Statement

Assume AC. Let $p$ be prime, let $K$ be a finite oriented regular cell
complex, and let

$$x\in H^q_{\mathrm{cell}}(K;\mathbb F_p).$$

Index the $p^2$ factors of $K^{p^2}$ by
$(i,j)\in\mathbb Z/p\times\mathbb Z/p$, and let
$\alpha(i,j)=(i+1,j)$ and $\beta(i,j)=(i,j+1)$. The iterated external
power, formed first in the columns and then in the rows, and the one-step
$p^2$-fold external power for
$R=\langle\alpha,\beta\rangle\cong C_p\times C_p$ have the same pullback
along the double diagonal to $W_1\times W_2\times K$.

Using the standard cyclic basis on the two resolution factors, write this
common class uniquely as

$$\sum_{j,k\geq0}[w_j]\times[w_k]\times D_{j,k}(x),\qquad D_{j,k}(x)\in H^{p^2q-j-k}_{\mathrm{cell}}(K;\mathbb F_p).$$

Then

$$D_{j,k}(x)=(-1)^{jk+p(p-1)q/2}D_{k,j}(x).$$

The coefficient is zero when $p^2q-j-k<0$. This lemma concerns the finite
regular cellular construction. It asserts neither an Adem relation nor the
later extension to arbitrary singular spaces.

## Facts & Assumptions

**Given:** AC, a prime $p$, a finite oriented regular cell complex $K$, a degree-$q$ cellular class $x$, and two copies $W_1,W_2$ of the standard cyclic resolution.

[F1] The equivariant carrier comparison applies to any group acting freely on the chosen chain basis; relative extensions are valid for subcomplexes spanned by unions of free cell orbits ([[lem-equivariant-p-fold-external-power-and-diagonal]]).

[F2] The standard cyclic resolution has one cohomology basis class $[w_j]$ in every nonnegative degree ([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F3] AC supplies a choice function for every set-indexed family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** identify the direct and iterated tensor cocycles on a common row--column resolution, pull them back to two cyclic coordinates, and apply matrix transposition while retaining both Koszul signs.

1.1 Build the row--column free resolution. Let $R=\langle\alpha,\beta\rangle$. On $W_1\otimes W_2^{\otimes p}$, let $\alpha$ act on $W_1$ and cyclically permute the $p$ copies of $W_2$, with the tensor Koszul sign, and let $\beta$ act diagonally on those $p$ copies. These actions commute and implement the displayed permutations of the $p\times p$ array. [given]

The tensor product is augmented and acyclic because each $W_i$ is an augmented free resolution and tensoring their augmented contractions over the field $\mathbb F_p$ gives an augmented contraction. It is free as an $R$-complex. Indeed, an element $\alpha^a\beta^b$ fixing a tensor-basis cell must have $a=0$, since its action on the $W_1$-cell is free; with $a=0$, freeness of every $W_2$-cell forces $b=0$. Thus $W_1\otimes W_2^{\otimes p}$ is a free acyclic $R$-resolution.

2.1 Define the one-step $R$-power directly on the row--column resolution. Choose a degree-$q$ cellular cocycle $c$ representing $x$. Put $V=W_1\otimes W_2^{\otimes p}$. On $V\otimes C^{\otimes p^2}$ define $\mathcal P_R(c)$ on a pure tensor by $$\varepsilon_1(w)\prod_{r=1}^{p}\varepsilon_2(v_r)\prod_{r=1}^{p}\prod_{s=1}^{p}c(z_{r,s}).$$ The tensor differential and $c d=0$ make this a cocycle. It is $R$-equivariant: a $p$-cycle acting on degree-$q$ coefficient factors has sign $(-1)^{q^2(p-1)}=1$ for odd $p$, and every sign is $1$ over $\mathbb F_2$. This class depends only on $x$. If $c'-c=\delta b$, the usual interval cochain $D:I\otimes C\to\mathbb F_p[-q]$ has endpoints $c,c'$. Apply the relative carrier theorem in [F1] with $\Gamma=R$ and the **whole target** $I^{\otimes p^2}\otimes V$ as carrier for each free orbit generator of $I\otimes V$. This carrier is $R$-invariant and augmented acyclic: the cellular interval complex and $V$ have augmented contractions, and their finite tensor product over $\mathbb F_p$ is augmented contractible. The two endpoint copies of $V$ span an $R$-subcomplex made of free cell orbits, since $R$ acts freely on the $V$ basis; both prescribed endpoint maps are augmentation-preserving. The theorem therefore extends the two endpoint maps to an $R$-map $$I\otimes V\longrightarrow I^{p^2}\otimes V,$$ where $R$ permutes the interval factors as it permutes the matrix positions. After the canonical signed regrouping, evaluation by $D^{\otimes p^2}$ is a cochain homotopy from $\mathcal P_R(c)$ to $\mathcal P_R(c')$. The relative subcomplex is exactly the one just checked. Its orbitwise fillings are the only use of AC here. [F1, F3, step 1.1]

3.1 Compare with the iterated cocycle and pull back. Form the iterated representative by first applying $\varepsilon_2\otimes c^{\otimes p}$ in each row and then applying the same tensor-power formula with $\varepsilon_1$ to the $p$ resulting factors. The canonical signed regrouping [F1, step 1.1, step 2.1]

$$\bigl(W_2\otimes C^{\otimes p}\bigr)^{\otimes p}\longrightarrow W_2^{\otimes p}\otimes C^{\otimes p^2}$$

moves each resolution and coefficient factor through exactly the same homogeneous factors as the tensor-evaluation convention. The two Koszul signs therefore cancel, and on every pure tensor the iterated functional is exactly $\mathcal P_R(c)$.

For the resolution diagonal $d_2:W_2\to W_2^{\otimes p}$, use the whole $W_2^{\otimes p}$ as carrier. It is $C_p$-invariant and augmented acyclic by the tensor contraction, while $W_2$ has free $C_p$-orbit cells, so [F1] gives an augmentation-preserving equivariant comparison, unique up to carried homotopy. For the cellular double diagonal, assign to a product basis generator $v\otimes e$ the cellular chains of the product of the closed characteristic cell $\overline e$ in all $p^2$ coordinates, tensored with the relevant resolution carrier. Regularity makes $\overline e$ a closed disk; its finite product has augmented-acyclic cellular chains. These nested carriers are $R$-invariant under permutation of the product coordinates. The source $V\otimes C$ has free $R$-orbit basis by Step 1.1, so [F1] supplies the equivariant carried approximation to $d':K\to K^{p^2}$ and uniqueness up to carried homotopy. The two cocycles therefore have the same pullback to $W_1\otimes W_2\otimes C_*(K;\mathbb F_p)$, which proves the first claim. Carrier homotopy uniqueness makes the resulting class independent of the chosen resolution and cellular diagonal approximations.

4.1 Define the double coefficients uniquely. After the double pullback, $\alpha$ acts only on $W_1$, $\beta$ only on $W_2$, and both act trivially on $K$. In equivariant Hom, the two resolution differentials act by their augmentations and hence by zero over $\mathbb F_p$. Since each resolution degree is free of rank one, the total cochain complex decomposes coordinatewise and [F2] gives [F2, step 3.1]

$$H^n_R(W_1\times W_2\times K;\mathbb F_p)=\bigoplus_{j+k\leq n}[w_j]\times[w_k]\times H^{n-j-k}_{\mathrm{cell}}(K;\mathbb F_p).$$

For $n=p^2q$, the unique coordinates in this direct sum are the classes $D_{j,k}(x)$ in the statement. A coordinate with $j+k>p^2q$ lies in a negative cellular cochain degree and is therefore zero.

5.1 Compute the effect of transposing the array. Let $\lambda(i,j)=(j,i)$. It conjugates $\alpha$ to $\beta$ and $\beta$ to $\alpha$. On the two-factor cyclic resolution the compatible chain map is the graded symmetry [F2, step 1.1, step 4.1]

$$L(v_1\otimes v_2)=(-1)^{|v_1||v_2|}v_2\otimes v_1.$$

Consequently $L$ sends the $(j,k)$-basis coordinate to $(-1)^{jk}$ times the $(k,j)$-coordinate.

The permutation $\lambda$ fixes the $p$ diagonal positions and exchanges the other $p^2-p$ positions in $p(p-1)/2$ pairs. Its sign is therefore $(-1)^{p(p-1)/2}$. Permuting $p^2$ degree-$q$ coefficient factors acts on their one-dimensional tensor line by the $q$th power of that sign, namely $(-1)^{p(p-1)q/2}$.

The direct tensor cocycle of step 3.1 is invariant under the simultaneous position transpose and this coefficient action, while the double diagonal is fixed by transpose. Hence transpose sends its $(j,k)$-summand to

$$(-1)^{jk+p(p-1)q/2}[w_k]\times[w_j]\times D_{j,k}(x).$$

Uniqueness of the coordinates in step 4.1, followed by exchanging $j$ and $k$, gives the asserted formula.

6.1 Empty and zero complexes give zero coefficients, and a point gives $D_{0,0}(a)=a$. For the empty complex or the zero cellular complex all classes and coefficients are zero. For a point in degree zero, only $D_{0,0}(a)=a^{p^2}=a$ can be nonzero. The zero class is represented by the zero cocycle and has every coefficient zero. Step 4.1 includes $j=0$, $k=0$, and $j+k=p^2q$, and proves vanishing beyond that endpoint. [F3, step 2.1, step 3.1, step 4.1, step 5.1]

At $p=2$, both displayed signs are invisible in $\mathbb F_2$; at odd primes the cyclic equivariance sign in step 3.1 is $1$, while the transpose sign remains exactly the exponent in step 5.1. Cellular chains have no singular degeneracy operators, so a degenerate-simplex check is item-specifically inapplicable and remains part of the deferred singular extension. The sole use of AC from [F3] is the carrier comparison already isolated in step 2.1; all index sets and tensor regroupings and transpositions here are explicit and finite. No implication in the argument uses Cartan or an Adem relation. ∎
