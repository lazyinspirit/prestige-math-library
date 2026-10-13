---
id: lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains
kind: lemma
title: "Distinct cyclotomic shears give integrable based quantum sl-two chains"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quantum-weight-module-and-integrability, def-lusztig-divided-power-integral-form, lem-divided-power-and-toral-quantum-binomial-reordering-identities, thm-unique-kashiwara-i-string-decomposition, thm-quantized-sl-two-string-formulas, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, thm-cyclotomic-polynomials-are-irreducible-over-the-rationals, lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain, def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-balanced-triple-and-globalization-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups, based-module conditions and divided-power rank-one calculus"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "27.1.2, printed214/PDF223, supplies the four conditions; the infinite chain and the cyclotomic congruences are proved locally."
    - title: "Huancheng Bao and Weiqiang Wang, Canonical bases in tensor products revisited"
      url: "https://arxiv.org/pdf/1403.0039v2"
      locator: "Complete seven-page paper; §2.1 replaces finite-dimensionality in Lusztig's four based conditions by integrability."
---

## Statement

Work in quantum $\mathfrak{sl}_2$ over $K=\mathbb Q(q)$, with $A=\mathbb Z[q,q^{-1}]$ and the divided-power integral form $U_A$. For $j\ge0$ put $\ell_j=j+3$, $n_j=j(j+3)$ and $r_j=j+2=\ell_j-1$. Let $V(n_j)$ have divided basis $u_{j,k}=F^{(k)}u_{j,0}$, $0\le k\le n_j$, of weight $n_j-2k$. Let $d_j=\varphi(2\ell_j)/2$ and $p_j=q^{-d_j}\Phi_{2\ell_j}(q)$, where $\Phi_m$ is the monic cyclotomic polynomial. Define $M=\bigoplus_{j\ge0}V(n_j)$ and the $K$-linear operator

$$T_j u_{j,t\ell_j}=(-1)^{t(\ell_j-1)}u_{j+1,r_j+t\ell_j}\quad(0\le t\le j),$$

with $T_j=0$ on every other divided basis vector. Define $S=\sum_{j\ge0}T_j/p_j$, $C=1+S$, and $b_{j,k}=C u_{j,k}$.

Then $S^2=0$; $C$ and $C^{-1}=1-S$ have finite columns on the algebraic direct sum; and $B=\{b_{j,k}\}$ is a homogeneous $K$-basis. Its free $A$-span $M_A=C(\bigoplus_j V_A(n_j))$ is $U_A$-stable. The standard compatible bar fixes every $b_{j,k}$. The regular zero and infinity charts, and their crystal residues, are exactly those of the standard direct sum of divided strings. Thus $(M,B)$ satisfies all four based-module axioms with integrability in place of finite-dimensionality, and its integral triple is balanced. No infinite vector or completed direct sum enters this construction. No choice assumption is needed.

For every $a\in U_A$, the raw-coordinate action is the finite-column operator

$$C^{-1}aC=a+[a,S]-SaS.$$

In particular, with $G_j=\binom{n_{j+1}}{r_j}_q\ne0$,

$$E^{(r_j)}b_{j,0}=\frac{G_j}{p_j}b_{j+1,0}-\frac{G_j}{p_jp_{j+1}}b_{j+2,r_{j+1}},$$

and both displayed coefficients belong to $A$. This is a module-construction assertion; it does not assert a failure of tensor globalization.

## Facts & Assumptions

**Given:** The quantum weight-module and integrability convention of [[def-quantum-weight-module-and-integrability]], the divided-power form of [[def-lusztig-divided-power-integral-form]], the divided-power reordering identities of [[lem-divided-power-and-toral-quantum-binomial-reordering-identities]], the unique finite string decomposition of [[thm-unique-kashiwara-i-string-decomposition]], and the balanced-triple interface of [[def-balanced-triple-and-globalization-map]].

[F1] In a divided highest string $V(n)$, $F^{(a)}u_k=\binom{k+a}{a}_q u_{k+a}$ and $E^{(a)}u_k=\binom{n-k+a}{a}_q u_{k-a}$, with zero outside $0,\ldots,n$. Toral elements act by their weight scalars in $A$, and the Kashiwara operators shift divided positions by one. These formulas follow from [[thm-quantized-sl-two-string-formulas]], the divided-power reordering identities and the finite string decomposition in the Given suppliers.

[F2] The standard string bar fixes divided positions, and the direct-sum regular charts have those bases. The four based conditions of [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]] are homogeneity, $U_A$-stability of the free $A$-span, compatibility of the basis-fixing bar with the module action, and the crystal basis given by the basis residues in the regular zero chart. Integrability replaces the additional finite-dimensionality condition, as specified in Bao–Wang§2.1.

[F3] Cyclotomic polynomials are monic integer polynomials of the stated totient degree and are irreducible over the rationals ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]). Their primitive-root characterization is the one used in those proofs. The Laurent ring $A$ is a unique-factorization domain, and primitive irreducible integer polynomials not associated to $q$ remain irreducible there ([[lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain]]).

## Proof

**Proof technique:** direct.

1.1 **Cyclotomic denominators.** For $m=2\ell\ge6$, primitive $m$th roots occur in inverse pairs and none equals $1$ or $-1$. Thus $\Phi_m$ has even degree $2d$, integer coefficients, constant term $1$, and is reciprocal. Consequently $p=q^{-d}\Phi_m(q)$ belongs to $A$, is bar fixed, and is irreducible up to a unit in the unique-factorization ring $A$. Moreover $1/p=q^d/\Phi_m(q)$ is regular at zero with strictly positive valuation; bar invariance gives strictly positive valuation at infinity in the parameter $q^{-1}$. Different values of $\ell$ give nonassociate irreducibles. Finally $p$ divides $[\ell]_q$, since a primitive $2\ell$th root is a simple zero of $q^\ell-q^{-\ell}$ and not a zero of $q-q^{-1}$. [F3, algebra]

2.1 **The needed Gaussian congruences.** Put $z=q^2$ and reduce modulo $\Phi_{2\ell}(q)$, so $z$ is a primitive $\ell$th root and $q^\ell=-1$. The finite identity $\prod_{h=0}^{N-1}(1+z^hX)=\sum_{k=0}^N z^{k(k-1)/2}\binom{N}{k}_zX^k$, proved by multiplying one factor at a time, and the block identity $\prod_{h=0}^{\ell-1}(1+z^hX)=1-(-X)^\ell$ give the Gaussian digit rule: a coefficient with lower remainder exceeding upper remainder modulo $\ell$ vanishes; when the remainders agree, the remaining coefficient comes from the ordinary binomial expansion of the full blocks. Since $\binom{N}{k}_q=q^{-k(N-k)}\binom{N}{k}_{q^2}$, for $r=\ell-1$ this gives $\binom{r+k}{k}_q=0\bmod p$ unless $k=t\ell$, and gives $\binom{r+t\ell}{t\ell}_q=(-1)^{t(\ell-1)}\bmod p$. Indeed the lower remainder is nonzero exactly in the vanishing cases, while in the other cases the unsymmetrized coefficient is $1$ and the symmetrizing factor is $q^{-t\ell(\ell-1)}=(-1)^{t(\ell-1)}$. The argument takes place in the integral domain $A/(p)$ and proves divisibility in $A$, rather than merely pointwise numerical vanishing. [step 1.1, algebra]

3.1 **Modular divided-power homomorphisms.** Fix $j$, write $\ell=\ell_j$, $n=j\ell$, $r=\ell-1$ and $m=n+2r=n_{j+1}$. In $V_A(m)/(p_j)$, the vector $v=u_{j+1,r}$ has weight $n$. For $1\le a\le r$, the coefficient of $E^{(a)}v$ is $\binom{m-r+a}{a}_q=\binom{(j+1)\ell-1+a}{a}_q$, whose upper remainder $a-1$ is smaller than the lower remainder $a$; hence it is zero by step 2.1. For $a>r$ the action is already zero. Also $F^{(k)}v=\binom{r+k}{k}_q u_{j+1,r+k}$ vanishes modulo $p_j$ whenever $k>n$: until $k=(j+1)\ell-1$ its remainder is nonzero, and for $k\ge(j+1)\ell$ the target position exceeds $m$. Therefore $u_{j,k}\mapsto F^{(k)}v$ defines a homomorphism of the complete divided strings modulo $p_j$. To check all generators, divided $F$ compatibility is the Gaussian product identity for $F^{(a)}F^{(k)}$; divided $E$ compatibility follows by reordering $E^{(a)}F^{(k)}$ and using the just-proved annihilation of all positive divided $E$ powers on the weight-$n$ vector $v$, leaving exactly $\binom{n-k+a}{a}_q F^{(k-a)}v$; the vanished positions $k>n$ respect the source endpoints. Every toral generator and toral quantum binomial has the same weight scalar on matched positions. Step 2.1 identifies this homomorphism with $T_j$ modulo $p_j$, so $(aT_j-T_ja)V_A(n_j)\subseteq p_j V_A(n_{j+1})$ for every $a\in U_A$. [F1, step 2.1, algebra]

4.1 **Exact vanishing of consecutive shears.** The nonzero target positions of $T_j$ are $k=r_j+t\ell_j=(t+1)\ell_j-1$, $0\le t\le j$. Reduced modulo $\ell_{j+1}=\ell_j+1$, their residues are $\ell_j-t-1$, ranging from $2$ to $\ell_j-1$. None is zero. Since $T_{j+1}$ is supported precisely on positions divisible by $\ell_{j+1}$, one has $T_{j+1}T_j=0$ exactly. Other products $T_iT_j$ vanish because their source and target summands do not match. On every vector only finitely many $T_j$ act, so $S$ is algebraic, $S^2=0$, and $C^{-1}=1-S$. The equality $n_{j+1}=n_j+2r_j$ also shows each $T_j$ preserves weights. [step 3.1, construct, algebra]

5.1 **Integral action, including the cross terms.** Put $L_A=\bigoplus_j V_A(n_j)$. For $a\in U_A$, the standard action preserves each summand of $L_A$, and $C^{-1}aC=a+[a,S]-SaS$ by step 4.1. Step 3.1 makes every column of $[a,T_j]/p_j$ integral. The only potentially nonzero summands of $SaS$ are $T_{j+1}aT_j/(p_{j+1}p_j)$. The numerator is divisible by $p_j$, because it equals $T_{j+1}(aT_j-T_ja)$ using $T_{j+1}T_j=0$; it is divisible by $p_{j+1}$, because it also equals $(T_{j+1}a-aT_{j+1})T_j$. These are entrywise divisibilities of matrices in standard divided bases. The distinct irreducibles $p_j,p_{j+1}$ are coprime in the unique-factorization ring $A$, so their product divides every entry. Thus all cross terms are integral. For every input column there are at most two shear positions, so all sums remain finite. It follows that $C^{-1}aC$ preserves $L_A$, equivalently $aM_A\subseteq M_A$. This checks the full divided-power integral form, not just $E$ and $F$. [F1, step 1.1, step 3.1, step 4.1, algebra]

6.1 **The basis and its compatible bar.** The inverse from step 4.1 makes $B=C\{u_{j,k}\}$ a field basis and makes its $A$-span free with that basis. Homogeneity was checked there. Each coefficient $(-1)^{t(\ell_j-1)}/p_j$ is bar fixed by step 1.1, so the standard module bar fixes each $b_{j,k}$; consequently this is exactly the basis-fixing bar of $B$ and retains its compatibility with the $U$ action. Every vector has finitely many summand components, each in a finite divided string, so $E,F$ are locally nilpotent, the chosen weight grading is a direct sum, and $M$ is integrable. No arbitrary selection of vectors or bases is used. [F1, F2, step 1.1, step 4.1, step 5.1, construct]

7.1 **Crystal charts and balancedness.** Let $L_0$ and $L_\infty$ be the standard direct-sum regular charts. Step 1.1 shows that both $C$ and $C^{-1}$ preserve these charts and are the identity on their zero and infinity residues: their nonidentity entries are signed $1/p_j$, in $qA_0$ and $q^{-1}A_\infty$, respectively. Therefore the $B$-generated regular charts equal the standard ones, and the residues of $B$ equal the standard divided-string crystal vertices. Kashiwara stability and the crystal inverse relations follow directly from [F1], so the fourth based axiom holds. In the common basis $B$, the integral lattice and charts have coefficient rings $A,A_0,A_\infty$. Their simultaneous intersection has integer coefficients because a Laurent polynomial regular at both zero and infinity is an integer constant. Also $A\cap A_0=\mathbb Z[q]$. Hence the integral balanced map is the coefficientwise isomorphism $\bigoplus_B\mathbb Z\longrightarrow\bigoplus_B\mathbb Z[q]/q\mathbb Z[q]$. All coefficient families have finite support. [F1, F2, step 1.1, step 6.1, algebra]

8.1 **The explicit top action and conclusion.** Since $u_{j,0}$ is highest, $E^{(r_j)}u_{j,0}=0$. Also $b_{j,0}=u_{j,0}+u_{j+1,r_j}/p_j$, so [F1] gives $E^{(r_j)}b_{j,0}=(G_j/p_j)u_{j+1,0}$. Replacing $u_{j+1,0}$ by $b_{j+1,0}-u_{j+2,r_{j+1}}/p_{j+1}$ gives the stated formula, because $r_{j+1}=j+3$ is not divisible by $\ell_{j+2}=j+5$ and thus $u_{j+2,r_{j+1}}=b_{j+2,r_{j+1}}$. Gaussian polynomials are nonzero in $K$, so $G_j\ne0$; step 5.1 proves that both coefficients are in $A$. Steps 4.1–7.1 establish every claimed basis, action, bar, integrability, crystal and balanced property for this actual algebraic module. [F1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎
