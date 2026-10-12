---
id: def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules
kind: definition
title: "The Fock-space convention dictionary for finite type-A quantum modules"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra,
       def-positive-negative-and-toral-quantum-subalgebras,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       def-quantum-weight-module-and-integrability,
       def-contravariant-form-on-an-integrable-quantum-highest-weight-module,
       def-lusztig-divided-power-integral-form,
       def-kashiwara-lattices-lambda-and-infinity,
       def-the-bar-lattice-and-integral-lattice-of-a-based-module,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.2-2.3 (printed pp. 5-9): the generators $D_i,E_i,F_i$, the comultiplication and the bar involution of the Fock-space normalization; complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section 3 (printed pp. 7-9): the quantized enveloping algebra $U_n$, its comultiplication, bar involution and integral form; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.1 (printed p. 17): the classical BGG category O used as the specialization target; complete passage read."
---

## Definition

Throughout this pair the **source parameter** of the Fock-space literature is
written $s$ and the **library parameter** of the Drinfeld–Jimbo algebra
[[def-drinfeld-jimbo-quantized-enveloping-algebra]] is written $t$; the
dictionary below sets $t=s^{-1}$.

Let $I$ be a nonempty consecutive set of simple-root indices and put $I^+=I\cup(I+1)$, the coordinate alphabet. On a finite coordinate interval $J=[k,r]\subseteq I^+$ the roots have indices $[k,r-1]$, the coordinate weight lattice is $\bigoplus_{a=k}^r\mathbb Z\delta_a$, $\alpha_a=\delta_a-\delta_{a+1}$ and $h_a=e_a-e_{a+1}$. The full central coordinate is retained. The source algebra $U_s$ has toral generators $D_a^{\pm1}$ for $a\in J$ and root generators $E_a,F_a$ for $k\le a<r$, acting on natural vectors $v_b$, $b\in J$, by

$$D_av_b=s^{\delta_{ab}}v_b,\qquad E_av_b=\delta_{a+1,b}\,v_a,\qquad F_av_b=\delta_{a,b}\,v_{a+1},$$

$$\Delta E_a=1\otimes E_a+E_a\otimes D_aD_{a+1}^{-1},\qquad \Delta F_a=F_a\otimes1+D_a^{-1}D_{a+1}\otimes F_a .$$

The library parameter $t$ is identified with $s^{-1}$; the **semilinear Hopf
dictionary** is the coefficient map $t\mapsto s^{-1}$ together with the
generator assignment

$$E_a\longmapsto E_a,\qquad F_a\longmapsto F_a,\qquad K_h\longmapsto D_{-h},$$

where the $E_a,F_a$ on the source side are the *divided* generators of the
source normalization and on the library side those of
[[def-lusztig-divided-power-integral-form]] (the assignments agree on the
undivided generators $E_a=E_a^{(1)}$, $F_a=F_a^{(1)}$, and divided powers are
carried to divided powers because the quantum integers are invariant under
$q\mapsto q^{-1}$, [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).
Root-label weights are preserved, while toral numerical eigenvalues use the
reciprocal parameter: on a weight vector of weight $\mu$ the library generator
$K_h$ acts by $t^{\mu(h)}=s^{-\mu(h)}$, which is the action of $D_{-h}$ because
$(-h)(\mu)=-\mu(h)$.

The **bar involution** sends $s\mapsto s^{-1}$, fixes $E_a$ and $F_a$ and
inverts each $D_a$; the corresponding library operation is the involution with
$t\mapsto t^{-1}$, $E_a\mapsto E_a$, $F_a\mapsto F_a$ and
$K_h\mapsto K_h^{-1}$ of [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]
and [[def-lusztig-divided-power-integral-form]].

The **natural highest weight** attached to an interval $[k,r]$ is
$\delta_k=\varepsilon_k$ (equivalently the highest weight reached by the
leading coordinate vector $v_k$), its **dual highest weight** is
$-\delta_r$, and the **fundamental wedge weight** is
$\delta_k+\delta_{k+1}+\cdots+\delta_m$ for $k\le m\le r$. Every fundamental
factor carries its own highest-vector-normalized bar, integral lattice and
divided-string crystal charts ([[def-kashiwara-lattices-lambda-and-infinity]]);
its internal antisymmetrizer embedding is primitive and integral but is *not*
asserted to be based in the library's raw lower $q_0$ chart. Infinite intervals
are defined by the compatible system of their finite subintervals, and
[[def-quantum-weight-module-and-integrability]] with
[[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]] supplies
the library integrable modules used on each finite interval.

The source Fock families $L,T,P$ and the library form-dual upper family
([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]) will
be compared below through their actual forms; they are never identified by
their names.

## Facts & Assumptions

**Given:** The type-$A$ root datum with full coordinate weight lattice, a finite interval $[k,r]\subseteq I^+$, the source generators $D_a,E_a,F_a$ with the displayed action and comultiplication, and the library algebra with its generators $E_a,F_a,K_h$ and parameter $t$.

[F1] Library presentation and toral action ([[def-drinfeld-jimbo-quantized-enveloping-algebra]], [[def-positive-negative-and-toral-quantum-subalgebras]]): $K_hK_{h'}=K_{h+h'}$, $K_0=1$, $K_hE_aK_h^{-1}=q^{\langle\alpha_a,h\rangle}E_a$, $K_hF_aK_h^{-1}=q^{-\langle\alpha_a,h\rangle}F_a$, and on a weight vector of weight $\mu$ the element $K_h$ acts by $q^{\mu(h)}$; the $\mathbb Q(q)$-algebra is generated by the $E_a,F_a,K_h$.

[F2] Quantum integers ([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]): $[m]_q=(q^m-q^{-m})/(q-q^{-1})$ is invariant under $q\mapsto q^{-1}$; the divided power is $x^{(m)}=x^m/[m]_{q_a}!$.

[F3] Library form and bar ([[def-lusztig-divided-power-integral-form]], [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]], [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]], [[def-kashiwara-lattices-lambda-and-infinity]], [[def-quantum-weight-module-and-integrability]]): the bar involution is the semilinear endomorphism with $t\mapsto t^{-1}$ fixing the divided generators and inverting $K_h$; integrable highest-weight modules, their normalized highest vectors, bars and lattices are available on finite intervals.

[F4] Existence and uniqueness of integrable highest-weight modules ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]) on the finite-interval subdatum.

## Proof

**Proof technique:** Check the dictionary on generators and relations and conclude it is a well-defined semilinear Hopf identification on each finite interval.

1.1 **Toral relations.** Under $t\mapsto s^{-1}$ and $K_h\mapsto D_{-h}$, the library relation $K_hK_{h'}=K_{h+h'}$ becomes $D_{-(h+h')}=D_{-h}D_{-h'}$, and $K_0=1$ becomes $D_0=1$; these are the source toral relations. Toral elements commute in both presentations, so $\varphi$ is well defined on the toral subalgebra $\mathbb Q(t)[P^\vee]\to\mathbb Q(s)[\mathbb Z J]$. [F1, algebra]

1.2 **Mixed relations.** The library relation $K_hE_aK_h^{-1}=t^{\langle\alpha_a,h\rangle}E_a$ becomes, after $t\mapsto s^{-1}$, $D_{-h}E_aD_{-h}^{-1}=s^{-\langle\alpha_a,h\rangle}E_a$, and interchanging $h$ and $-h$ this is the source relation $D_{h'}E_aD_{h'}^{-1}=s^{\langle\alpha_a,h'\rangle}E_a$; the $F_a$-relation is the sign-reversed mirror. This matches the displayed action $D_av_b=s^{\delta_{ab}}v_b$ because $\langle\alpha_b,e_a\rangle=\delta_{ab}-\delta_{a,b+1}$; pairing with $h_a=e_a-e_{a+1}$ gives the type-$A$ Cartan matrix. [F1, algebra]

1.3 **The $E$-$F$ commutator.** The library relation $E_aF_b-F_bE_a=\delta_{ab}(K_a-K_a^{-1})/(t_a-t_a^{-1})$ maps to $\delta_{ab}(D_{-a}-D_a)/(s^{-1}_a-s_a)$ where $D_{\pm a}:=D_{\pm d_a h_a}$; both numerator and denominator change sign under the substitution, so the fraction is unchanged and equals the source relation $\delta_{ab}(D_a-D_a^{-1})/(s_a-s_a^{-1})$ after relabelling. No divided generator is modified, as asserted. [F1, F2, algebra]

1.4 **Serre relations.** The Gaussian binomials and the divided powers $E_a^{(m)}=E_a^m/[m]_{q_a}!$ are unchanged as elements under $q_a\mapsto q_a^{-1}$ by [F2]; hence each positive and negative quantum Serre element of the library presentation maps to the corresponding source Serre element, since only the divided powers and the binomial coefficients occur. [F2, algebra]

1.5 **Comultiplication.** Since $K_a$ maps to $D_{-h_a}=D_a^{-1}D_{a+1}$, its inverse maps to $D_{h_a}=D_aD_{a+1}^{-1}$. Thus the library formulas map to $\Delta E_a=1\otimes E_a+E_a\otimes D_aD_{a+1}^{-1}$ and $\Delta F_a=F_a\otimes1+D_a^{-1}D_{a+1}\otimes F_a$, exactly the source coproduct. The counit and antipode agree on these generators and hence on the generated algebra. [F1, algebra]

1.6 **Bar involution.** On the source side bar fixes $E_a,F_a$ and inverts $D_a$, hence it sends $D_{-h}\mapsto D_h=D_{-h}^{-1}$; on the library side bar fixes the divided generators and inverts $K_h$. Under the dictionary the two involutions intertwine, and both conjugate the parameter. Consequently bar commutes with the dictionary on the generating set and hence on the generated algebra. [F3, algebra]

1.7 **Weights and labels.** A weight vector of weight $\mu=\sum_a m_a\varepsilon_a$ is an eigenvector of $K_h$ with eigenvalue $t^{\mu(h)}=s^{-\mu(h)}$, which equals the eigenvalue of $D_{-h}$; hence root-label weights are preserved while the toral eigenvalues use the reciprocal parameter, as asserted. In particular $\delta_k=\varepsilon_k$ and $-\delta_r$ are genuine coordinate characters, and the fundamental wedge carries $\delta_k+\cdots+\delta_m$; the central coordinate $\delta_k+\cdots+\delta_r$ is retained. [F1, algebra]

2.1 **Conclusion.** Steps 1.1-1.6 show that the generator assignment preserves every family of defining relations and the Hopf operations on each finite interval, so it extends uniquely to a semilinear Hopf-algebra map $\varphi:U_t\to U_s$ with $t\mapsto s^{-1}$, and symmetrically for the inverse; it is an isomorphism on the subalgebra generated by the finitely many $D_a^{\pm1},E_a,F_a$ with coordinate indices $k\le a\le r$ and root indices $k\le a<r$. Infinite intervals are covered by the compatible finite subintervals, and the library integrable modules and lattices of [F3], [F4] are transported by $\varphi$ on each of them. The comparison of the Fock families through their actual forms, not their names, is carried out in the following items. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7] ∎
