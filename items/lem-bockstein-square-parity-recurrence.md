---
id: lem-bockstein-square-parity-recurrence
kind: lemma
title: Bockstein parity recurrence for Steenrod squares
status: published
verification:
  audited: 2026-09-14
origin: pipeline
deps: ["lem-natural-higher-diagonal-approximations-on-singular-chains", "def-higher-cup-i-products", "def-steenrod-squares-from-cup-i-products", "thm-steenrod-squares-are-well-defined-and-natural", "thm-cup-i-coboundary-identity", "def-bockstein-connecting-operation", "thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications in Homotopy Theory
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2 signed cup-i coboundary calculation, printed pages 15--16, and Chapter 3 Lemma 1, printed page 23
---

## Statement

Let $\beta:H^*(-;\mathbb F_2)\to H^{*+1}(-;\mathbb F_2)$ be the
Bockstein of

$$0\longrightarrow\mathbb F_2\xrightarrow{\,2\,}\mathbb Z/4\longrightarrow\mathbb F_2\longrightarrow0.$$

If $x\in H^p(X;\mathbb F_2)$ and $0\leq j\leq p$, then

$$\beta Sq^j(x)=\begin{cases}Sq^{j+1}(x),&j\ \text{even},\\0,&j\ \text{odd}.\end{cases}$$

The value $Sq^{p+1}(x)$ at the endpoint $j=p$ is zero by the
outside-range convention. The proof uses canonical residue lifts and makes
no use of AC.

## Facts & Assumptions

**Given:** A mod-two class $x$ of degree $p\geq0$ and an index
$0\leq j\leq p$.

[F1] Natural mod-two higher diagonals are coherently unique once their
Alexander--Whitney term is fixed
([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

[F2] Mod-two cup-$i$ is tensor evaluation on those diagonals
([[def-higher-cup-i-products]]).

[F3] The class $Sq^j(x)$ is represented by
$a\smile_{p-j}a$ and is independent of the chosen coherent system
([[def-steenrod-squares-from-cup-i-products]],
[[thm-steenrod-squares-are-well-defined-and-natural]]).

[F4] The mod-two cup-$i$ coboundary identity has the two transposed
cup-$(i-1)$ terms
([[thm-cup-i-coboundary-identity]]).

[F5] For the displayed cyclic coefficient sequence, least residue lifts
compute the Bockstein without AC
([[def-bockstein-connecting-operation]]).

[F6] Alexander--Whitney and shuffle are augmentation-preserving chain-homotopy
inverses over arbitrary coefficients
([[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]).

## Proof

**Proof technique:** lift the higher diagonals integrally, divide the signed
cup-$i$ coboundary by two, and reduce the resulting parity calculation.

1.1 Construct a compatible signed integral cup-$i$ system. Let $W_{\mathbb Z}$ be the standard free $\mathbb Z[C_2]$-resolution with one generator $e_i$ in degree $i$ and [F1, F2, F3, F6]

$$de_i=(1+(-1)^iT)e_{i-1}\qquad(i>0).$$

On tensor chains, let
$T(c\otimes d)=(-1)^{|c||d|}d\otimes c$. For every standard simplex,
[F6] and the integral prism contraction give a specified augmentation
contraction of its tensor-square chain complex. Induction first on $i$ and
then on simplex dimension therefore extends the Alexander--Whitney diagonal
to a natural equivariant chain map

$$W_{\mathbb Z}\otimes C_*(X;\mathbb Z)\longrightarrow C_*(X;\mathbb Z)\otimes C_*(X;\mathbb Z).$$

Write $D_i$ for its $e_i$-coordinate. The chain-map equation is

$$dD_i-(-1)^iD_i d=(1+(-1)^iT)D_{i-1}.$$

Every filling takes place in one fixed finite standard-simplex carrier, so
this induction makes no arbitrary choice. Reduction modulo two is a natural
higher-diagonal system with Alexander--Whitney term. By [F1] and [F3], it
computes the same Steenrod-square classes as the fixed mod-two system.

2.1 Derive the signed integral coboundary formula. For integral cochains $u$ of degree $r$ and $v$ of degree $s$, define $u\smile_i v=(u\otimes v)D_i$. Evaluating the equation of step 1.1 and the signed tensor differential gives [F4, step 1.1]

$$\delta(u\smile_i v)=(-1)^i\delta u\smile_i v+(-1)^{i+r}u\smile_i\delta v-(-1)^iu\smile_{i-1}v-(-1)^{rs}v\smile_{i-1}u.$$

The convention is $\smile_{-1}=0$. Reducing this equality modulo two gives
the identity in [F4], so the integral and mod-two conventions agree exactly.

3.1 Compute the lifted Bockstein representative. Choose a mod-two cocycle $a$ representing $x$, and let $c$ be its specified integral lift taking only the values zero and one. Since $\delta a=0$, there is a unique integral cochain $h$ with $\delta c=2h$; moreover $\delta h=0$ because integral singular cochain groups are torsion-free. Put $i=p-j$. By [F3], the reduction of $c\smile_i c$ represents $Sq^j(x)$. Use its reduction modulo four as the lift in [F5]. Step 2.1 gives [F3, F5, step 2.1]

$$\delta(c\smile_i c)=2(-1)^ih\smile_i c+2(-1)^{i+p}c\smile_i h-\bigl((-1)^i+(-1)^p\bigr)c\smile_{i-1}c.$$

After division by two and reduction modulo two, the Bockstein is represented
by

$$\bar h\smile_i a+a\smile_i\bar h+\epsilon_j(a\smile_{i-1}a),$$

where $\epsilon_j=1$ exactly when $i$ and $p$ have the same parity, equivalently
when $j$ is even, and $\epsilon_j=0$ when $j$ is odd.

4.1 Remove the two lift-error terms. Both $a$ and $\bar h$ are mod-two cocycles. Apply [F4] to $a\smile_{i+1}\bar h$: [F3, F4, step 3.1]

$$\delta(a\smile_{i+1}\bar h)=a\smile_i\bar h+\bar h\smile_i a.$$

Thus the first two terms in step 3.1 form a coboundary. Since
$i-1=p-(j+1)$, [F3] identifies the remaining term with $Sq^{j+1}(x)$.
This proves the displayed parity recurrence.

5.1 Check endpoints, degeneracies, and choice. For the empty space or zero class, all cochains displayed above are zero. If $p=0$, then $j=0$, $i=0$, and the right side is the prescribed $Sq^1=0$ on a degree-zero class. At $j=0$, the argument retains $\smile_{p-1}$; at $j=p$, it has $i=0$ and $\smile_{-1}=0$, so $Sq^{p+1}(x)=0$ exactly as stated. Both even and odd $j$ were computed rather than inferred. The integral standard-simplex construction and its reduction retain degenerate singular simplices. The zero/one lift of every value, division of an even integer, and every carrier contraction are specified; [F5] confirms that the cyclic Bockstein lift is choice-free. No AC, converse implication, or unproved integral use of the mod-two identity occurs. [F3, F4, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎