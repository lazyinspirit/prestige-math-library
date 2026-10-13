---
id: lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain
kind: lemma
title: "Two cyclotomic shears give a periodic integrable based quantum sl-two chain"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-quantized-sl-two-string-formulas, lem-divided-power-and-toral-quantum-binomial-reordering-identities, def-lusztig-divided-power-integral-form, thm-unique-kashiwara-i-string-decomposition, thm-cyclotomic-polynomials-are-irreducible-over-the-rationals, lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain, def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-balanced-triple-and-globalization-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups, based-module conditions and divided-power rank-one calculus"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "27.1.2, printed214/PDF223; the periodic chain and modular Gaussian congruences are proved locally."
    - title: "Huancheng Bao and Weiqiang Wang, Canonical bases in tensor products revisited"
      url: "https://arxiv.org/pdf/1403.0039v2"
      locator: "Complete seven-page paper; §2.1 specifies the four-axiom integrable extension."
---

## Statement

Put $K=\mathbb Q(q)$, $A=\mathbb Z[q,q^{-1}]$, $p=q+q^{-1}$ and $h=q^2+q^{-2}$. For $k\ge0$ set

$$n_{2k}=8k+2,\qquad n_{2k+1}=8k+4,\qquad \ell_{2k}=2,\qquad\ell_{2k+1}=4,\qquad r_j=\ell_j-1,$$

and set $p_j=p$ for even $j$ and $p_j=h$ for odd $j$. Let $u_{j,a}=F^{(a)}u_{j,0}$, $0\le a\le n_j$, be the divided basis of the highest string $V(n_j)$, of weight $n_j-2a$. On the algebraic module $M=\bigoplus_{j\ge0}V(n_j)$ define

$$T_j u_{j,t\ell_j}=(-1)^t u_{j+1,r_j+t\ell_j}\quad(0\le t\le n_j/\ell_j),$$

and define $T_j$ to be zero on all other divided basis vectors. Put $S=\sum_jT_j/p_j$, $C=1+S$, and $b_{j,a}=C u_{j,a}$.

Then $S^2=0$ and $C^{-1}=1-S$; these are finite-column algebraic operators. The homogeneous basis $B=\{b_{j,a}\}$ has a free $U_A$-stable integral span, its standard compatible bar fixes $B$, and its regular zero and infinity charts and crystal residues are those of the standard direct sum of divided strings. Thus it is an actual four-axiom based integrable finite-Cartan-type module, with a balanced integral triple and no choice assumption.

For every $J\ge0$, the finite version $M^{(J)}=\bigoplus_{0\le j\le J}V(n_j)$, with shears only for $j<J$, has the same properties. For every $a\in U_A$ the raw-coordinate action is $C^{-1}aC=a+[a,S]-SaS$; its column at a raw basis vector of index $j$ is supported at summand indices at most $j+2$. That column agrees with the finite version whenever $J\ge j+2$.

The raw seed $b_{0,0}\otimes b_{0,2}$ in two copies has total weight zero and factor weights $2,-2$. Both factors are deformed: $b_{0,0}=u_{0,0}+u_{1,1}/p$ and $b_{0,2}=u_{0,2}-u_{1,3}/p$. This statement constructs the modules and finite versions; it does not assert infinite tensor correction supports.

## Facts & Assumptions

**Given:** The divided-power integral form and reordering calculus of [[def-lusztig-divided-power-integral-form]] and [[lem-divided-power-and-toral-quantum-binomial-reordering-identities]], the rank-one strings of [[thm-quantized-sl-two-string-formulas]], the finite Kashiwara string decomposition of [[thm-unique-kashiwara-i-string-decomposition]], the exact based conditions of [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]], and the integral balanced map of [[def-balanced-triple-and-globalization-map]].

[F1] On $V(n)$, $F^{(t)}u_a=\binom{a+t}{t}_q u_{a+t}$ and $E^{(t)}u_a=\binom{n-a+t}{t}_q u_{a-t}$, with zero outside the finite string. Toral generators, including toral quantum binomials, act by the scalar specified by the weight, in $A$. The standard bar fixes each divided vector, and the Kashiwara operators shift its position by one ([[thm-quantized-sl-two-string-formulas]], [[thm-unique-kashiwara-i-string-decomposition]]).

[F2] $A$ is a unique-factorization domain; primitive irreducible integer polynomials not associated to $q$ remain irreducible in it ([[lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain]]). The polynomials $\Phi_4=q^2+1$ and $\Phi_8=q^4+1$ are irreducible over the rationals ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]).

[F3] The four based conditions are a homogeneous field basis, stability of its free $A$-span under $U_A$, compatibility of its basis-fixing bar with the action, and the crystal basis in the basis-generated regular zero chart. A based subobject must be spanned by a subset of that basis ([[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]).

## Proof

**Proof technique:** direct.

1.1 **The two denominators and the weights.** One has $p=q^{-1}\Phi_4$ and $h=q^{-2}\Phi_8$, so [F2] makes them nonassociate prime elements of $A$. Both are bar fixed, and $1/p=q/(1+q^2)$ and $1/h=q^2/(1+q^4)$ belong to $qA_0$ and, by bar invariance, to $q^{-1}A_\infty$. The source highest weight $n_j$ is divisible by $\ell_j$, and $n_{j+1}=n_j+2r_j$ for both parities. Hence every displayed target has the same weight as its source and lies in the target string. [F1, F2, algebra]

2.1 **All the modular Gaussian coefficients.** For $\ell\in\{2,4\}$ reduce modulo $q^{-\ell/2}\Phi_{2\ell}(q)$, which is the corresponding $p_j$. Then $z=q^2$ has order $\ell$ and $q^\ell=-1$. The generating identity $\prod_{a=0}^{N-1}(1+z^aX)=\sum_t z^{t(t-1)/2}\binom Nt_zX^t$ follows by multiplication and the Gaussian recurrence; each full block of length $\ell$ is $1-(-X)^\ell$. It follows that a Gaussian coefficient with lower remainder larger than upper remainder modulo $\ell$ vanishes. For $r=\ell-1$ and $t\ge0$, the coefficient $\binom{r+t}{t}_{q}$ vanishes unless $t=v\ell$; in that case its unsymmetrized Gaussian value is $1$ and its symmetrizing factor is $q^{-v\ell(\ell-1)}=(-1)^v$, since $\ell$ is even. This gives exactly the coefficients of $T_j$ modulo $p_j$. All reductions are in the integral domain $A/(p_j)$, so they are divisibilities in $A$. [F2, step 1.1, algebra]

3.1 **Full divided-power intertwining modulo each denominator.** Fix $j$, put $n=n_j=a\ell_j$, $r=\ell_j-1$ and $m=n+2r$, and take $v=u_{j+1,r}$ in $V_A(m)/(p_j)$. Its weight is $n$. For $1\le t\le r$, the coefficient of $E^{(t)}v$ is $\binom{(a+1)\ell_j-1+t}{t}_q$, with upper remainder $t-1$ and lower remainder $t$, so it vanishes by step 2.1; larger $t$ give zero by the endpoint. Also $F^{(t)}v$ vanishes for every $t>n$: until $t=(a+1)\ell_j-1$ its nonzero remainder forces vanishing by step 2.1, and larger $t$ exceed the target endpoint. The assignment $u_{j,t}\mapsto F^{(t)}v$ therefore intertwines all divided $F$ actions by Gaussian multiplication. Divided $E$ reordering, using the annihilation of all positive divided $E$ powers on the weight-$n$ vector $v$, gives exactly $\binom{n-t+s}{s}_q F^{(t-s)}v$ for $E^{(s)}F^{(t)}v$, including zero beyond the source endpoints. Toral elements act by matched weight scalars. Step 2.1 identifies this assignment with $T_j$ modulo $p_j$, proving $[a,T_j]V_A(n_j)\subseteq p_jV_A(n_{j+1})$ for every $a\in U_A$. [F1, step 2.1, algebra]

4.1 **Algebraic invertibility and integral cross terms.** Every $T_j$ is supported on even positions and has odd target positions. Thus $T_{j+1}T_j=0$ exactly, and all other twofold products vanish by their summand indices. Every column is finite, so $S^2=0$ and $C^{-1}=1-S$ on the algebraic direct sum. For $a\in U_A$, expansion gives $C^{-1}aC=a+[a,S]-SaS$. The commutator summands are integral by step 3.1. The only cross terms are $T_{j+1}aT_j/(p_{j+1}p_j)$. Their numerators are divisible by $p_j$, using $T_{j+1}(aT_j-T_ja)$, and by $p_{j+1}$, using $(T_{j+1}a-aT_{j+1})T_j$. Adjacent denominators are the two distinct primes of step 1.1, so their product divides every matrix entry by [F2]. The conjugated operator therefore preserves the standard free integral span, proving stability of the $B$-span. No nonadjacent repeated denominator creates a cross term. [F1, F2, step 1.1, step 3.1, algebra]

5.1 **The compatible basis and crystal charts.** The inverse in step 4.1 proves that $B$ is a field basis with free integral span; its homogeneity is step 1.1. The coefficients $(-1)^t/p_j$ are bar fixed, so the standard module bar fixes $B$ and remains compatible with the algebra action. The module is integrable because every vector occupies finitely many finite standard strings. By step 1.1, $C$ and its inverse preserve both regular charts and are the identity on both residues, so the charts and crystal vertices coincide with the standard direct-sum ones. Their Kashiwara operators are exactly the finite shifts in [F1]. Thus all four conditions of [F3] hold. [F1, F3, step 1.1, step 4.1, construct]

6.1 **Balancedness, finite versions and exact column agreement.** In the common basis $B$, the three coefficient rings are $A,A_0,A_\infty$; their simultaneous intersection is $\mathbb Z$ and $A\cap A_0=\mathbb Z[q]$, since a Laurent polynomial regular at both ends is constant. Coefficientwise reduction therefore gives the integral balanced isomorphism, with finite support throughout. Omitting shears at indices at least $J$ preserves every preceding argument and gives the stated finite version. A standard action $a$ preserves each constituent summand; $C$ can raise the constituent index by at most one and $C^{-1}$ by at most one. Thus the raw column of $C^{-1}aC$ at index $j$ has indices at most $j+2$ and uses only shears with index at most $j+1$, all present when $J\ge j+2$; its finite and infinite computations agree. Finally the signs at positions $0,2$ in the first string give exactly the two stated seed formulas and factor weights. Every vector, map and index is specified explicitly, so no choice is used. [F1, step 4.1, step 5.1, algebra] ∎
