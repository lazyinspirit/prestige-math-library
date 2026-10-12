---
title: "Research support: CC energy-angular decomposability and unitary fibers"
status: draft
domain: mathematics
proof_strategy: direct
---

This is an author support argument for step 4.1 of
`stationary-sector-repair-draft.md`, read against the actual source40 carrier
`items/thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification.md`
and `outside40-proposal.md`. It supplies only decomposability, adjoints,
unitarity and the covariance quantifier. It does not prove the stationary
resolvent comparison, amplitude formula or radial Wronskian identification.
Acceptance and the full consumer check remain with the sole spectral repair
successor. No production item, mirror, import, plan or readiness is changed.

## Statement

Assume Countable Choice. Put $X=(0,\infty)$ with completed Lebesgue measure
$\mu=dE$, $\mathfrak h=L^2(S^2,d\sigma)$, where $\sigma(S^2)=4\pi$, and
$\mathcal K=L^2(X,\mu;\mathfrak h)$. Fix the explicitly enumerated spherical
harmonic ONB $e_j=Y_{l_jm_j}$, listing $l=0,1,\ldots$ and
$m=-l,\ldots,l$. Thus no arbitrary Hilbert basis is chosen. The norm of a
section is $\|f\|_{\mathcal K}^2=\int_X\|f(E)\|_{\mathfrak h}^2dE$;
sections are strongly measurable modulo equality almost everywhere. An
operator field $T(E)$ is **strongly measurable** here if
$E\mapsto T(E)a$ is strongly measurable for each fixed $a\in\mathfrak h$.
No measurability in the operator-norm topology is asserted.

Let $Q\in\mathcal B(\mathcal K)$ commute with every energy projection
$P_A=M_{1_A}$ for Borel $A\subset X$. Then there is a strongly measurable
field $T(E)\in\mathcal B(\mathfrak h)$, unique almost everywhere as an
operator field, such that

$$\|T(E)\|\le\|Q\|\quad\hbox{a.e.},\qquad (Qf)(E)=T(E)f(E)\quad\hbox{a.e. for every }f\in\mathcal K.$$

The same construction applied to $Q^*$ gives a field $R(E)$ and one common
conull set on which $R(E)=T(E)^*$. If $Q$ is unitary, on a common conull set

$$T(E)^*T(E)=T(E)T(E)^*=I,\qquad T(E)^{-1}=R(E)=T(E)^*.$$

In the unitary case one may set $T(E)=R(E)=I$ on the measurable null
exceptional set, giving strongly measurable unitary representatives at every
$E>0$. These arbitrary null-set values have no stationary or continuity
meaning. The construction uses countably many representatives and countably
many finite rational tests; it does not choose an operator separately at each
energy and does not invoke AC or DC.

## Facts & Assumptions

**Given:** CC, the specified spherical ONB and the bounded projection-commuting
operator $Q$. Inner products are linear in the first argument.

[F1] Elementary completed-Lebesgue integration, monotone convergence,
Parseval's identity for the specified countable ONB, and completeness of the
scalar and vector $L^2$ spaces are used. These are mathematical prerequisites,
not general direct-integral or arbitrary-basis theorems. Borel projection
commutation extends to Lebesgue measurable sets because every such set agrees
with a Borel set modulo a null set and hence defines the same $P_A$.

[F2] If a measurable real function $u$ is locally integrable and
$\int_Au\le0$ for every measurable subset $A$ of each finite interval
$(0,n)$, then $u\le0$ a.e.: otherwise one of
$\{E\in(0,n):u(E)>1/m\}$ has positive measure and positive integral.
Applying this to both $u$ and $-u$ proves equality from equal integrals.
For complex functions apply it to real and imaginary parts. This test requires
no simultaneous choice of the testing sets; each is explicitly defined.

## Proof

1.1 [Scalar coefficient commutants] Define the fixed coordinate maps $\iota_j:L^2(X)\to\mathcal K$, $(\iota_jg)(E)=g(E)e_j$, and $\pi_i:\mathcal K\to L^2(X)$, $(\pi_if)(E)=\langle f(E),e_i\rangle$. Then $B_{ij}=\pi_iQ\iota_j$ has norm at most $C=\|Q\|$ and commutes with scalar energy projections. More generally let $B$ be any bounded scalar operator with that commutation and put $I_n=(0,n)$, $b_n=B1_{I_n}\in L^2(X)$. Commutation shows that $b_n$ is supported in $I_n$ and $B1_A=1_Ab_n$ for every measurable $A\subset I_n$. Thus $\int_A|b_n|^2\le\|B\|^2\mu(A)$; [F2] gives $|b_n|\le\|B\|$ a.e. on $I_n$. If $m\le n$, $1_{I_m}b_n=B1_{I_m}=b_m$, so the restrictions agree as $L^2$ classes. The identity $Bg=b_ng$ holds first for simple $g$ supported in $I_n$, then for all $g\in L^2(I_n)$ by simple approximation and the established multiplier bound. Exhaustion by $I_n$ gives the scalar multiplier formula on all $L^2(X)$. [given, F1, F2, construct, algebra]

2.1 [Exactly countable representative selection] Apply step 1.1 to all $B_{ij}$ and also to all coefficients of $Q^*$. The latter commutes with $P_A$ by taking adjoints, since $P_A=P_A^*$. The index set of all resulting classes $b_{ij,n}$ for both operators is countable. Use CC once to choose finite measurable representatives of these classes. Remove the countable union of their bound-failure and overlap-disagreement null sets. On what remains, define $q_{ij}(E)$ to be $b_{ij,n}(E)$ for the first integer $n>E$; define $r_{ij}$ identically for $Q^*$. Set all these scalar functions to zero on the discarded set. They are measurable, globally bounded by $C$ (also $\|Q^*\|=C$), and the scalar formulas $B_{ij}=M_{q_{ij}}$ and $\pi_iQ^*\iota_j=M_{r_{ij}}$ hold. The first-integer rule is a specified operation, not an energy-indexed choice. [step 1.1, construct, choose, algebra]

3.1 [The joint pointwise operator bound] Let $D$ be the countable set of finite linear combinations of the $e_j$ with coefficients in $\mathbb Q+i\mathbb Q$. For $c=\sum_jc_je_j\in D$, every finite output truncation $N$, every $n$, and every measurable $A\subset I_n$, Parseval and the bound on $Q$ give $\int_A\sum_{i=1}^N|\sum_jq_{ij}(E)c_j|^2dE\le C^2\mu(A)\|c\|^2$. Indeed the integrand is the norm square of the first $N$ angular coordinates of $Q(1_Ac)$, since the coefficient formulas in step 2.1 hold for each of the finitely many input coordinates. By [F2] the corresponding pointwise inequality holds a.e. Intersect the conull sets for the countable indices $c,N,n$, and do the same for $r_{ij}$. Include the set of step 2.1. This produces a measurable common conull set $G$ on which all the inequalities hold simultaneously. Increasing $N$ gives square-summable output coordinates and the bound $\sum_{i\ge1}|\sum_jq_{ij}(E)c_j|^2\le C^2\|c\|^2$; the same holds for $r$. [F1, F2, step 2.1, construct, algebra]

4.1 [Unique completion at every good energy] For $E\in G$ define $T_0(E)c=\sum_{i\ge1}(\sum_jq_{ij}(E)c_j)e_i$ on $D$. The series converges in $\mathfrak h$ by step 3.1. Finite coordinate algebra proves additivity and $\mathbb Q+i\mathbb Q$ linearity, and step 3.1 bounds it by $C\|c\|$. Therefore it extends uniquely by norm limits from the dense set $D$ to $T(E)\in\mathcal B(\mathfrak h)$; approximation of complex scalars by rational-complex scalars proves complex linearity. Define $R(E)$ from $r$ in the same way and set $T(E)=R(E)=0$ off $G$. Each construction is unique completion of given coordinates, with no choice of a completion or of a fiber basis. For $c\in D$, finite output sums are measurable $\mathfrak h$-valued functions, so their limits $T(E)c$ are strongly measurable. For fixed $a\in\mathfrak h$, one can use the first element of a fixed enumeration of $D$ within $1/s$ of $a$ to obtain a specified approximating sequence; the uniform bound makes $T(E)a$ its pointwise limit. This proves strong measurability of $T$ and $R$. [F1, step 3.1, construct, algebra]

5.1 [Actual multiplication on all sections] Strongly measurable sections are pointwise limits a.e. of measurable simple sections. Applying $T(E)$ to such approximants is measurable by step 4.1, and the bound $C$ passes their pointwise convergence through $T(E)$. Thus $T(E)f(E)$ is measurable and $\|M_Tf\|_{\mathcal K}\le C\|f\|_{\mathcal K}$; the multiplication operator is well-defined on equivalence classes. On sections $1_Ac$ with $\mu(A)<\infty$ and $c\in D$, step 2.1 identifies each angular coordinate of $Q(1_Ac)$ with that of $M_T(1_Ac)$. Countably many coordinates determine the same $\mathfrak h$-valued section a.e. Finite sums of these sections are dense in $\mathcal K$: truncate energy to $I_n$, then angular coordinates, then approximate the finitely many scalar $L^2$ coordinates by finite simple functions with rational-complex values. Both operators are bounded, so $Q=M_T$ on all $\mathcal K$. Likewise $Q^*=M_R$. If another bounded measurable field gives $Q$, apply the equality to the countably many sections $1_{I_n}e_j$; off their joint null set its columns equal those of $T$, hence the fields agree as bounded operators by density. [F1, step 2.1, step 4.1, construct, algebra]

5.2 [Pointwise adjoint without infinite matrix multiplication] From the definitions, $(B_{ij})^*=\pi_jQ^*\iota_i$. The scalar adjoint of $M_{q_{ij}}$ is $M_{\overline{q_{ij}}}$, as follows directly by integrating the scalar inner product. Consequently $r_{ji}=\overline{q_{ij}}$ a.e.; equality of multipliers follows by testing $1_{I_n}$, or by [F2]. Remove the union of these countably many null sets from $G$. For finite rational angular vectors $a,b$, finite sums then give $\langle T(E)a,b\rangle=\langle a,R(E)b\rangle$. Bounds and density extend this identity to all $a,b\in\mathfrak h$. Hence on this same conull set $R(E)=T(E)^*$, including the actual bounded adjoint operator, not merely a transposed formal matrix. [F1, F2, step 2.1, step 4.1, algebra]

6.1 [Two isometries give the true unitary inverse] Suppose now that $Q$ is unitary. For $c\in D$ and measurable $A\subset I_n$, step 5.1 gives $\int_A\|T(E)c\|^2dE=\|Q(1_Ac)\|^2=\mu(A)\|c\|^2$. Apply [F2] in both directions to conclude $\|T(E)c\|=\|c\|$ a.e. Do this for the countable $c,n$ and also for the unitary $Q^*$ and its field $R$, and remove their joint exceptional set from that of step 5.2. By density and the bounds, both $T(E)$ and $R(E)$ preserve norms on all $\mathfrak h$ on the resulting common conull set. Complex polarization therefore gives $T(E)^*T(E)=I$ and $R(E)^*R(E)=I$. Since $R=T^*$, the second identity is $T(E)T(E)^*=I$. Thus $T(E)$ is onto as well as isometric, with actual inverse $R(E)=T(E)^*$. Replacing both fields by $I$ on the measurable exceptional set preserves measurability and their multiplication operators. The stated claims follow. [F1, F2, step 5.1, step 5.2, algebra] ∎

## Exact stationary-sector use and limits

Set $Q=F_0SF_0^*$, with the free energy-angular unitary
$F_0g(E,\omega)=E^{1/4}\widehat g(\sqrt E\omega)/\sqrt2$.
Independently proved individual completeness makes $S=\Omega_+^*\Omega_-$
unitary. Independently proved spectral intertwining gives
$SP_{H_0}(A)=P_{H_0}(A)S$; conjugation by $F_0$ gives exactly the energy
projection hypothesis above. The lemma then defines $S(E)=T(E)$ without
radiality. It permits angular coupling between distinct $(l,m)$ for a
generic nonradial real bounded compact potential. This mathematical argument
does not require a stationary amplitude formula or any zero-energy regularity.
Conversely it does not establish either of those claims.

For a rotation $R$, write
$\mathcal U_Rg(x)=g(R^{-1}x)$, $V_R(x)=V(R^{-1}x)$, and
$U_Ra(\omega)=a(R^{-1}\omega)$. Conjugating the defining wave limits gives
$S[V_R]=\mathcal U_RS[V]\mathcal U_R^{-1}$, since $H_0$ commutes with
$\mathcal U_R$ and $H[V_R]=\mathcal U_RH[V]\mathcal U_R^{-1}$.
The explicit Fourier-polar formula gives
$F_0\mathcal U_R=M_{U_R}F_0$. Uniqueness in step 5.1 consequently yields

$$S[V_R](E)=U_RS[V](E)U_R^{-1}\quad\hbox{for a.e. }E,\ \hbox{for each fixed }R.$$

For a family of arbitrary merely measurable representatives the exceptional
set may depend on $R$. Do not intersect uncountably many conull sets.
The separate norm-continuous stationary representative, once genuinely
proved, promotes this fixed-$R$ equality to every positive energy by
continuity. Without it, the stated fixed-$R$ a.e. identity is the conclusion.
No fixed nonradial potential is claimed to commute with rotations.

If $V$ is radial, the covariance instead gives commutation with every
$U_R$ for a fixed potential. A common conull set for this commutation can
be obtained from a **specified countable dense subset** of $SO(3)$ (for
example Euler rotations with rational angle parameters): take its countable
intersection, then extend to every rotation using strong continuity of
$R\mapsto U_R$ and boundedness of $S(E)$. Only at this stage may the known
finite-dimensional irreducibility and inequivalence of the spherical
harmonic representations be used to deduce scalar action on each degree
$l$, independent of $m$. The explicit radial Wronskian ratio and its
stationary normalization still require their separate radial proof.

## Author checks and outstanding acceptance

The proof explicitly checks the scalar norm bound, overlap consistency,
joint finite-angular bound, unique bounded completion, strong measurability,
equality on all sections, actual adjoint, and both directions of unitary
invertibility. Its only representative selection is the countable family
in step 2.1. All later approximants, limits, detecting sets and null-set
modifications are determined by the supplied countable data. This is an
author's mathematical check, not independent acceptance.

Integration still requires the successor to bind the exact independently
proved complete-wave and CC spectral-intertwining suppliers and the specified
spherical ONB supplier. Elementary measure/Hilbert prerequisites in [F1]
must resolve at their actual proof status. This support argument uses no
general spectral decomposability theorem, no measurable-selection theorem,
and no arbitrary Hilbert basis. The full generic stationary-sector candidate
and all direct and indirect consumers remain in the successor's scope.
