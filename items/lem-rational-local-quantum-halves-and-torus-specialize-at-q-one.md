---
id: lem-rational-local-quantum-halves-and-torus-specialize-at-q-one
kind: lemma
title: "Rational-local quantum halves and torus specialize at q=1"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finitely-generated-torsion-free-modules-over-a-pid-are-free, def-axiom-of-choice, def-discrete-valuation-ring, def-drinfeld-jimbo-quantized-enveloping-algebra, def-free-abelian-group, def-lusztig-divided-power-integral-form, def-positive-negative-and-toral-quantum-subalgebras, def-quantum-integers-factorials-and-divided-powers-at-q-i, def-symmetrizable-cartan-datum-for-a-quantum-group, def-the-laurent-polynomial-ring, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-pbw-for-countably-presented-kac-moody-lie-algebras, lem-unmodified-integral-torus-has-a-quantum-binomial-basis, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, thm-serre-presentation-of-a-kac-moody-algebra, thm-triangular-decomposition-of-a-quantized-enveloping-algebra, lem-quantum-pascal-recurrence-and-gaussian-integrality]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
axiom_use: "AC is used only through [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]](i), to identify the generic half dimensions with the classical PBW ranks; the localization, freeness, toral, triangular and specialization computations are choice-free."
verification:
  precheck: pass
sources:
  references:
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "PDF pp. 7, 9-10: generators of the restricted A-form, the toral product definition, and equal-exponent divided-power reordering. These slides provide integral-form background, not a proof of the generic highest-weight or lattice claims. The printed shift recurrence on PDF p. 10 has a typo; any shift identity used here is derived locally from the product."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 33, §33.1, printed pp. 257-260: the specialization at $q=1$ (via $v\\mapsto1$) and the comparison with the classical enveloping algebra (read via the owner's recorded OCR pass; the proof of this item is local and uses the published classical Serre presentation)."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, Theorem 13.2.1.10, printed p. 317: the rational weight-lattice comparison at q=1 for finite-dimensional highest weight modules in finite type. The half, toral and full quotient statements here are proved locally, rather than by this module comparison."
---

## Statement

Let $(I,A,D,P,P^{\vee},q)$ be a finite symmetrizable Cartan datum
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]), $A=\mathbb Z[q,q^{-1}]$
([[def-the-laurent-polynomial-ring]]), and
$R:=\mathbb Q[q]_{(q-1)}\subset\mathbb Q(q)$, so that $R$ is a DVR with
uniformizer $q-1$ ([[def-discrete-valuation-ring]]). Let
$U_R:=U_A\otimes_AR$ be the base
change of the integral form $U_A$ of
[[def-lusztig-divided-power-integral-form]], identified with its image in
$U_q(\mathfrak g)$.

(a) **Halves.** Each root component $U_R^\pm[\pm\nu]$ is a finite free
$R$-module, generated as an $R$-module by ordinary words
$E_{i_1}\cdots E_{i_k}$ (respectively $F_{i_1}\cdots F_{i_k}$) of degree
$\pm\nu$, and its $q=1$ fibre $U_R^\pm[\pm\nu]\otimes_RR/(q-1)$ is the classical
half $U(\mathfrak n^\pm)_{\mathbb Q}[\pm\nu]$ of the Kac-Moody algebra,
presented by the separate classical Serre relations
([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]](i),
[[thm-serre-presentation-of-a-kac-moody-algebra]]).

(b) **Torus.** Write $H_i:=T_{i,0,1}$ and let $L=\sum_i\mathbb Z(d_ih_i)$.
Then $U_R^0$ has the $R$-basis
$\{K_c\prod_iK_i^{\delta_i}H_i^{t_i}\}$ with $\delta_i\in\{0,1\}$,
$t_i\ge0$ and $c$ running through the explicit representatives of
$P^{\vee}/L$ of
[[lem-unmodified-integral-torus-has-a-quantum-binomial-basis]](b); and
multiplication
$U_R^-\otimes_RU_R^0\otimes_RU_R^+\to U_R$ is an isomorphism of
$R$-modules.

(c) **Positive quotient.** For every characteristic-zero field $k$ (an
$A$-algebra via $q\mapsto1$), the positive toral quotient
$U_A^0\otimes_Ak/(K_h-1:h\in P^{\vee})$ is the polynomial algebra $k[H_i:i\in I]$
with, in it, $\bar T_{i,c,t}=\binom{H_i+c}{t}$; and the positive full quotient
$(U_A\otimes_Ak)/(K_h-1:h\in P^{\vee})$ is isomorphic to $U(\mathfrak g_{\mathrm{der}})_k$,
where $\mathfrak g_{\mathrm{der}}$ is the classical Lie algebra presented by the
generators $e_i,f_i,h_i$ with the Cartan and Serre relations, its Cartan being
the span of the independent simple coroots. This is an assertion about the
stated quotient only: it is not claimed that $K_h=1$ in the unquotiented
specialization $U_A\otimes_Ak$, where genuine toral characters such as
$K=-1$ for $\mathfrak{sl}_2$ survive. Direct substitution $q=1$ into the
vanishing denominators $q_i^s-q_i^{-s}$ is never performed.

## Facts & Assumptions

**Given:** The Cartan datum, the Laurent ring $A$, the local DVR $R$ with uniformizer $q-1$, the integral form $U_A$ with its toral generators $K_h^{\pm1}$, $T_{i,c,t}$, and the classical Lie algebra conventions of the Kac-Moody page.

[F1] Every nonzero $f/g\in\mathbb Q(q)$ has a unique expression $(q-1)^m u$ with $m\in\mathbb Z$ and $u$ a fraction whose numerator and denominator are nonzero at $1$. The exponent is additive on products, and its nonnegative part is exactly $R=\mathbb Q[q]_{(q-1)}$. Thus $R$ is a DVR with uniformizer $q-1$, residue field $\mathbb Q$, and units precisely the fractions nonzero at $1$ ([[def-discrete-valuation-ring]]). A nonzero ideal of $R$ has a least valuation $m\ge0$; an element of that valuation generates it, so $R$ is a PID. Finitely generated torsion-free $R$-modules are free ([[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]). The elements $q_i^{\pm1}$ and $[r]_i!$ are units, since their values are $1$ and $r!$. The element $q_i-q_i^{-1}$ has valuation one, and is not a unit; however $(q_i^s-q_i^{-s})/(q_i-q_i^{-1})=[s]_i$ is a unit for $s\ge1$ ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] $U_A$ is the $A$-subalgebra generated by the divided powers $E_i^{(r)},F_i^{(r)}$, the $K_h^{\pm1}$ and the $T_{i,c,t}$; its toral part $U_A^0$ is generated by the $K_h^{\pm1}$ and the $T_{i,c,t}$; $U_R$ is the $R$-subalgebra generated by the same elements, as shown by the common-denominator argument in step 1.1, and $U_A\otimes_AR\cong U_R$ as $R$-algebras ([[def-lusztig-divided-power-integral-form]]).

[F3] $U_q^-$ (respectively $U_q^+$) is the quotient of the free algebra on the $F_i$ (respectively $E_i$) by the separate quantum Serre ideal, and the Drinfeld-Jimbo Serre elements specialize at $q=1$ to the classical Serre elements, with Gaussian binomials reducing to ordinary binomials; words of degree $\pm\nu$ span the components; the halves have the classical PBW ranks equal to their generic dimensions by the published rank comparison, which assumes AC ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[def-positive-negative-and-toral-quantum-subalgebras]], [[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]](i), [[def-axiom-of-choice]]).

[F4] The classical enveloping algebra of the Kac-Moody algebra has the presentation by the Cartan and Serre relations, $U(\mathfrak g)=U(\mathfrak n^-)\otimes U(\mathfrak h)\otimes U(\mathfrak n^+)$ as vector spaces, and $U(\mathfrak g_{\mathrm{der}})=U(\mathfrak n^-)\otimes k[h_i]\otimes U(\mathfrak n^+)$ for the derived algebra of the statement; the classical PBW theorem supplies the ordered-monomial bases ([[thm-serre-presentation-of-a-kac-moody-algebra]], [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]).

[F5] Over the field $\mathbb Q(q)$, multiplication $U_q^-\otimes_{\mathbb Q(q)}U_q^0\otimes_{\mathbb Q(q)}U_q^+ \to U_q(\mathfrak g)$ is an isomorphism, and $U_q^0\cong\mathbb Q(q)[P^{\vee}]$ ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]](i),(ii)).

[F6] The product and shift identities of the toral binomials hold on the nose: $T_rT_s=\sum_{j=0}^{\min(r,s)}z^{rs}K_i^{-j}\binom{r+s-j}{r}_z\binom{r}{j}_zT_{r+s-j}$ and $T_{c+1,t}=z^tT_{c,t}+K_i^{-1}z^{-c+t-1}T_{c,t-1}$ with $z=q_i$, and $E_jT_{i,c,t}=T_{i,c-a_{ij},t}E_j$, $F_jT_{i,c,t}=T_{i,c+a_{ij},t}F_j$, $E_iF_j-F_jE_i=\delta_{ij}T_{i,0,1}$ ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]], [[lem-unmodified-integral-torus-has-a-quantum-binomial-basis]]).

[F7] $L=\sum_i\mathbb Z(d_ih_i)$ has rank $|I|$, the $K_i=K_{d_ih_i}$ are algebraically independent, and the $A$-basis $\{K_c\prod_iK_i^{\delta_i}T_{i,0,t_i}\}$ of $U_A^0$ over the explicit representatives $c$ of $P^{\vee}/L$ exists ([[lem-unmodified-integral-torus-has-a-quantum-binomial-basis]](b), [[def-free-abelian-group]]).



## Verification

**Proof technique:** localize to the DVR, generate the halves by ordinary generators with unit denominators, compare generic dimensions with classical PBW ranks to identify the fibres, rewrite the toral basis through $H_i=T_{i,0,1}$, and reduce the positive quotient via the integral shift recursion.

1.1 The localized form. The map $A\to R$ inverts exactly the elements of $A$ with nonzero value at $1$: it inverts all nonzero integers, while keeping $q-1$ noninvertible. For an $A$-submodule $N$ of a $\mathbb Q(q)$-space, its localization is its $R$-span in that space: every tensor is a common-denominator fraction $n/s$, and its image vanishes only if $n=0$. This identifies $U_A\otimes_A R$ and its three factors with their generated $R$-subalgebras. The valuation description in [F1] supplies the local PID properties. [F1, F2, algebra]

1.2 The halves are finite free and specialize to the classical halves. Fix a root $\nu$. By [F2] and [F1], $E_i^{(r)}=E_i^r/[r]_i!$ and $F_i^{(r)}=F_i^r/[r]_i!$ with $[r]_i!\in R^{\times}$, so $U_R^+[\nu]$ is generated as an $R$-module by the ordinary words $E_{i_1}\cdots E_{i_k}$ of degree $\nu$ (finitely many for fixed $\nu$); it is torsion-free inside the $\mathbb Q(q)$-vector space $U_q^+[\nu]$, hence finitely generated torsion-free, hence free over the PID $R$ by [F1], of rank $\dim_{\mathbb Q(q)}U_q^+[\nu]$; the same holds on the negative side. The $q=1$ fibre is generated by the same words, and the quantum Serre relations of the free algebra specialize coefficientwise to the classical Serre relations, so there is a surjection from the classical half $U(\mathfrak n^+)[\nu]$ onto the fibre $U_R^+[\nu]\otimes_RR/(q-1)$; both are finite-dimensional over the residue field $\mathbb Q$, with dimensions equal to the generic dimension by [F3]'s rank comparison (the only AC use, inherited here). A surjection of finite-dimensional spaces of equal dimension is an isomorphism, so the fibre is $U(\mathfrak n^+)_{\mathbb Q}[\nu]$, and likewise for $U^-$. This proves (a). [F1, F2, F3, algebra]

1.3 The toral basis through $H_i$. Fix one node and put $z=q_i$, $K=K_i$, $H=T_{i,0,1}$ and $a=z-z^{-1}$. Then $K^{-1}=K-aH$ and $K^2=1+aKH$. For each integer $b$ use the extension $[b]_i:=(z^b-z^{-b})/(z-z^{-1})$ of the nonnegative quantum-integer convention. For $s\ge1$ the exact factor identity is $(Kz^b-K^{-1}z^{-b})/(z^s-z^{-s})=([b]_iK+z^{-b}H)/[s]_i$. Since $[s]_i\in R^\times$, all toral binomials lie in $R[K^{\pm1},H]$. The two relations for $K$ show this algebra is spanned by $\{K^\delta H^t:\delta=0,1,\ t\ge0\}$: it is closed under $K$, $K^{-1}$ and $H$. In a finite linear relation among these elements, take the largest $t=N$. The nonzero coefficient of $K^{N+1}$ in $KH^N$ isolates its coefficient; after removing it, the nonzero coefficient of $K^{-N}$ in $H^N$ isolates its coefficient. Descending proves independence over $\mathbb Q(q)$, hence over $R$. For the finitely many independent nodes, tensor these bases and multiply by the representatives $K_c$ of $P^\vee/L$; the direct group-algebra coset decomposition in [F7] proves independence and spanning, giving (b)'s toral basis. [F1, F5, F7, algebra]

2.1 Triangular decomposition over $R$. Each half component is free by step 1.2 and the torus is free by step 1.3, so their tensor product is free and embeds into its fraction-field extension. The field-level multiplication of [F5] is injective there, hence its restriction is injective. Surjectivity follows from the integral triangular spanning proved in [[lem-divided-power-and-toral-quantum-binomial-reordering-identities]](iv), after localization; containing algebra generators alone would not suffice for a linear image. Thus multiplication $U_R^-\otimes_RU_R^0\otimes_RU_R^+\to U_R$ is an isomorphism. [step 1.1, step 1.2, step 1.3, F5, F6, algebra]

2.2 The toral specialization and its positive quotient. The toral algebra has the presentation $R[P^\vee][H_i:i\in I]/(K_i-K_i^{-1}-(q_i-q_i^{-1})H_i:i\in I)$. Indeed it maps onto $U_R^0$ by step 1.3. In each simple-node factor, $K_i^2-(q_i-q_i^{-1})K_iH_i-1$ is monic in $K_i$ and gives $K_i^{-1}=K_i-(q_i-q_i^{-1})H_i$, so the presented algebra has basis $K_i^\delta H_i^t$. The group algebra $R[P^\vee]$ is free over $R[L]$ on the coset representatives; extending the finitely many node presentations therefore gives exactly the basis of step 1.3, proving injectivity. Every characteristic-zero specialization $A\to k$, $q\mapsto1$, factors through $R$. Reduction gives $U_A^0\otimes_A k\cong k[P^\vee/2L]\otimes_k k[H_i]$. Quotienting by all $K_h-1$ is the group-algebra augmentation in the first factor and yields $k[H_i]$ with exactly that kernel. With $b=c-s+1$, the factor identity in step 1.3 reduces in this quotient to $(H_i+b)/s$, hence $\bar T_{i,c,t}=\prod_{s=1}^t(H_i+c-s+1)/s=\binom{H_i+c}{t}$. [step 1.1, step 1.3, F1, F7, algebra]

3.1 The full positive quotient. In $U_A\otimes_A k$, every $K_h$ commutes with the halves because its crossing scalars $q^{\langle\alpha_j,h\rangle}$ specialize to $1$. Consequently the ideal generated by $K_h-1$ is, under the tensor decomposition of step 2.1, exactly $U(\mathfrak n^-)_k\otimes (K_h-1)_h(U_A^0\otimes_A k)\otimes U(\mathfrak n^+)_k$. The quotient thus has tensor space $U(\mathfrak n^-)_k\otimes k[H_i]\otimes U(\mathfrak n^+)_k$. The mixed relation specializes to $[e_i,f_j]=\delta_{ij}H_i$; the toral shifts give $[H_i,e_j]=a_{ij}e_j$ and $[H_i,f_j]=-a_{ij}f_j$, using step 2.2; and both Serre families specialize to the classical relations. The presentation in [F4] gives a surjection $U(\mathfrak g_{\mathrm{der}})_k\to Q$. It is an isomorphism on the three factors of the classical PBW tensor decomposition: on the halves by step 1.2, and on the torus by step 2.2. Multiplication intertwines these decompositions, so the full map is injective as well. The rational classical presentations used here have the same ranks as their complex extensions: in each finite word component, extension from $\mathbb Q$ to $\mathbb C$ preserves linear independence and kernels; [F4]'s complex Serre and PBW results therefore descend to $\mathbb Q$ and extend to any characteristic-zero $k$. This proves (c). [F4, step 1.2, step 2.1, step 2.2, algebra]

4.1 Boundaries. For the standard rank-one torus, the generic character $E=F=0$, $K=-1$ respects the quantum relations and restricts to an $A$-valued character of $U_A$: $T_{c,t}$ maps to $(-1)^t\prod_{s=1}^t[c-s+1]_i/[s]_i$, denoted $(-1)^t\binom{c}{t}_i$ with this product convention for integer $c$. For $c=-b<0$, each numerator $[-b-s+1]_i=-[b+s-1]_i$ contributes a second sign, so the character value is $\binom{b+t-1}{t}_i$, a Laurent polynomial; for $c\ge0$ Laurent integrality is supplied by [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]. The specialized character has $K=-1$, so the unquotiented specialization retains this character. All local divisions above are by units $[r]_i!$ or $[s]_i$; the factors $q_i-q_i^{-1}$ have valuation one and were canceled in the exact rational identity of step 1.3 before reduction. No vanishing denominator is inverted in $R$ or separately substituted at $q=1$. [F1, step 1.3, step 2.2, algebra] ∎
