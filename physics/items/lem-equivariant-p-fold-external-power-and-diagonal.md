---
id: lem-equivariant-p-fold-external-power-and-diagonal
kind: lemma
title: Equivariant p-fold external power and diagonal decomposition
status: published
origin: pipeline
deps: ["lem-free-cyclic-resolution-and-transfer-for-power-operations", "def-cellular-boundary-from-three-consecutive-skeleta", "lem-the-cellular-boundary-squares-to-zero", "def-axiom-of-choice"]
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
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter V sections 2--3, printed pages 60--64; Chapter VII section 2, printed pages 99--101, section 3, printed pages 103--104, and section 4, printed pages 104--105
---

## Statement

Assume AC. Let $p$ be prime, let $K$ be a finite regular cell complex with
oriented cellular chain complex $C_*(K;\mathbb F_p)$, and in this finite-model
lemma write

$$H^*_{\mathrm{cell}}(K;\mathbb F_p)=H^*\operatorname{Hom}_{\mathbb F_p}(C_*(K;\mathbb F_p),\mathbb F_p).$$

For $u\in H^q_{\mathrm{cell}}(K;\mathbb F_p)$, the standard free
$C_p$-resolution $W$ and the cellular product structure define an equivariant
external $p$th-power class

$$\mathcal P(u)\in H^{pq}_{C_p}(W\times K^p;\mathbb F_p).$$

It is independent of the cellular cocycle representing $u$ and, under the
unique comparison isomorphisms, of the chosen free acyclic resolution. It is
natural for continuous maps of finite regular cell complexes, and restriction
to a zero-cell fiber $K^p\hookrightarrow W\times K^p$ is
$u\times\cdots\times u$.

After pullback along the diagonal $d:K\to K^p$, there is a unique expansion

$$d^*\mathcal P(u)=\sum_{j=0}^{pq}[w_j]\times D_j(u),\qquad D_j(u)\in H^{pq-j}_{\mathrm{cell}}(K;\mathbb F_p),$$

and every coefficient operation $D_j$ is additive. Here $D_j=0$ if
$j<0$ or $j>pq$. Concretely, let
$\Phi_C:W\otimes C_*(K;\mathbb F_p)\to C_*(K;\mathbb F_p)^{\otimes p}$ be
any augmentation-preserving $C_p$-equivariant chain map carried by the
cellwise $p$-fold diagonal. If $c$ represents $u$, then $D_j(u)$ is represented
by the cellular cochain

$$z\longmapsto c^{\otimes p}\Phi_C(e_j\otimes z).$$

This lemma concerns the finite regular cellular model; it does not identify
that model with singular cohomology or claim the later extension to arbitrary
spaces.

The carrier comparison used in this construction has the following relative
form. If a group $\Gamma$ acts freely on a cellular basis of an augmented chain
complex $E$, if $E_0\subseteq E$ is the $\Gamma$-subcomplex spanned by a
subset of that basis (equivalently, by a union of its free cell orbits), and if a
$\Gamma$-equivariant augmented-acyclic carrier assigns a target subcomplex to
each basis cell, then every carried augmentation-preserving chain map already
defined on $E_0$ extends over $E$. Any two such carried extensions agreeing on
$E_0$ are $\Gamma$-equivariantly chain-homotopic relative to $E_0$, through the
same carrier. For an arbitrary set of cell orbits, AC is used exactly to choose
one representative and one permitted filling for each nonempty extension
problem.

## Facts & Assumptions

**Given:** AC, a prime $p$, a finite oriented regular cell complex $K$, a degree-$q$ cellular class $u$, and the standard cyclic resolution $W$.

[F1] The cyclic resolution has one cohomology basis class $[w_j]$ in every degree ([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F2] For $1\leq C_p$, transfer after restriction is multiplication by $p$, and hence is zero over $\mathbb F_p$ ([[lem-free-cyclic-resolution-and-transfer-for-power-operations]]).

[F3] The cellular boundary is the connecting map followed by the next skeletal quotient map ([[def-cellular-boundary-from-three-consecutive-skeleta]]).

[F4] The cellular boundary squares to zero ([[lem-the-cellular-boundary-squares-to-zero]]).

[F5] AC supplies a choice function for a set-indexed family of nonempty sets ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** construct the tensor power on cellular chains, compare choices by equivariant acyclic carriers, decompose diagonal cochains coordinatewise, and kill mixed terms by transfer.

1.1 Fix the finite cellular cochain model. By [F3] and [F4], $C=C_*(K;\mathbb F_p)$ is a nonnegative chain complex and $C^*=\operatorname{Hom}_{\mathbb F_p}(C,\mathbb F_p)$ is a cochain complex. The product regular-cell structure has cellular complex $C^{\otimes p}$: on a product cell the boundary is [given, F3, F4]

$$d(x_1\otimes\cdots\otimes x_p)=\sum_{i=1}^p(-1)^{|x_1|+\cdots+|x_{i-1}|}x_1\otimes\cdots\otimes dx_i\otimes\cdots\otimes x_p.$$

This follows cell by cell from the oriented boundary of a product disk. Let $C_p=\langle T\rangle$ rotate the tensor factors with the Koszul sign. Write $H^*_{C_p}(W\times K^p;\mathbb F_p)$ for the cohomology of $\operatorname{Hom}_{\mathbb F_p[C_p]}(W\otimes C^{\otimes p},\mathbb F_p)$.

1.2 Prove the equivariant carrier comparison used below. Suppose a group $\Gamma$ acts freely on the cells of a chain complex $E$, an augmentation-preserving map is already defined on a $\Gamma$-subcomplex spanned by a union of those free cell orbits, and each prescribed target carrier is augmented acyclic. Order a free orbit basis by dimension. AC first selects one cell in each orbit and then, once a map is defined below that orbit generator $e$, its boundary has already been sent to a cycle in the carrier of $e$; augmented acyclicity makes the set of permitted fillings nonempty. [F5] is used exactly here to choose one filling in every such nonempty set of orbit-by-orbit extension problems; equivariance defines the other translates. Applying the same construction to $I\otimes E$, relative to its two endpoint orbit-basis subcomplexes, gives a homotopy between any two carried extensions. [given, F5]

Taking the whole target as carrier proves that any two free acyclic $\Gamma$-resolutions admit augmentation-preserving comparison maps, unique up to equivariant chain homotopy. Taking $E=I\otimes W$ and target $I^p\otimes W$, with the endpoint maps $0\otimes w\mapsto0^p\otimes w$ and $1\otimes w\mapsto1^p\otimes w$, gives an equivariant map $h$ joining those ends. This is the only use of AC in the construction.

2.1 Construct the external class and compute its fiber. Choose a cocycle $c:C\to\mathbb F_p[-q]$ representing $u$, and let $\varepsilon:W\to\mathbb F_p$ be the augmentation. Define [step 1.1]

$$\mathcal P(c)(w\otimes x_1\otimes\cdots\otimes x_p)=\varepsilon(w)c(x_1)\cdots c(x_p).$$

The tensor differential in step 1.1 and $cd=0$ show directly that $\delta\mathcal P(c)=0$. Rotating $p$ degree-$q$ inputs has sign $(-1)^{q^2(p-1)}$. This is $1$ for odd $p$, while for $p=2$ every sign is $1$ in $\mathbb F_2$; hence $\mathcal P(c)$ is $C_p$-equivariant. On the fiber selected by an augmented zero-cell $e_0$ of $W$, $\varepsilon(e_0)=1$, so its restriction is exactly the cellular external cochain $c^{\otimes p}$ and represents $u\times\cdots\times u$.

3.1 Prove independence of cocycle and resolution. If $c'$ represents $u$, write $c'-c=\delta b$. The map $D:I\otimes C\to\mathbb F_p[-q]$ whose two endpoint restrictions are $c,c'$ and whose interval-edge value is $b$ is a chain map; its chain-map identity is exactly $c'-c=bd$. Compose the equivariant map $h$ from step 1.2, the signed regrouping [step 1.2, step 2.1]

$$I^p\otimes W\otimes C^{\otimes p}\longrightarrow W\otimes(I\otimes C)^{\otimes p},$$

and $\varepsilon\otimes D^{\otimes p}$. The result is an equivariant cochain homotopy from $\mathcal P(c)$ to $\mathcal P(c')$, so their classes agree.

For another free acyclic resolution $V$, an augmentation-preserving comparison $W\to V$ from step 1.2 pulls the defining cochain on $V$ back literally to the defining cochain on $W$. Two comparison maps induce the same cohomology map because their equivariant chain homotopy gives the usual cochain coboundary. Comparisons in both directions have composites homotopic to the identities by the same uniqueness argument, so these maps are isomorphisms and the class is resolution-independent in the asserted sense.

4.1 Prove naturality on finite regular complexes. For a continuous $f:K\to L$, barycentrically subdivide the finite source and target until $f$ is carried cellwise by contractible stars. Step 1.2 extends the induced vertex map to a carried cellular chain approximation $f_\#$; any two such approximations are carried-homotopic. The product carrier gives $(f_\#)^{\otimes p}$, and the defining evaluation satisfies [step 1.2, step 3.1]

$$\mathcal P(c\circ f_\#)=\mathcal P(c)\circ(1_W\otimes f_\#^{\otimes p}).$$

Subdivision maps and their composites are covered by the same comparison uniqueness, so the induced cohomology map is independent of all subdivisions and approximations. The equality proves naturality, while step 3.1 makes it independent of the chosen cocycle.

5.1 Obtain the unique diagonal expansion. On $W\times K$ the cyclic group acts only on $W$. Since $W_j$ is the free rank-one module on $e_j$, total-degree-$n$ equivariant cochains have the canonical finite decomposition [F1, step 1.1, step 4.1]

$$\operatorname{Hom}_{\mathbb F_p[C_p]}((W\otimes C)_n,\mathbb F_p)=\bigoplus_{j=0}^n w_j\otimes C^{n-j}.$$

The $W$-part of the cochain differential is zero, as computed in [F1], and the remaining coordinate differential is $(-1)^j\delta_C$. Therefore taking cycles and boundaries coordinatewise gives, without a splitting choice,

$$H^n_{C_p}(W\times K;\mathbb F_p)=\bigoplus_{j=0}^n[w_j]\times H^{n-j}_{\mathrm{cell}}(K;\mathbb F_p).$$

Pulling $\mathcal P(u)$ back along the equivariant map $1_W\times d$ and taking its unique coordinates defines the stated $D_j(u)$. A cellular approximation to $1_W\times d$ is equivalently a $C_p$-equivariant chain map $\Phi_C:W\otimes C\to C^{\otimes p}$ carried by the cellwise diagonal. Existence and independence up to a carried equivariant homotopy follow from step 1.2. Evaluating the defining cocycle $\varepsilon\otimes c^{\otimes p}$ after this approximation shows that its $w_j$ coordinate is exactly the cochain $z\mapsto c^{\otimes p}\Phi_C(e_j\otimes z)$. Step 4.1 and uniqueness of the fixed basis coordinates prove naturality of every $D_j$.

6.1 Kill mixed terms and prove additivity. Let $c,d$ be degree-$q$ cocycles. Expanding $(c+d)^{\otimes p}-c^{\otimes p}-d^{\otimes p}$ leaves the $2^p-2$ mixed words in $c,d$. A mixed word fixed by a nonidentity rotation would have period properly dividing the prime $p$, hence would be constant; therefore every mixed word has a free $C_p$-orbit. Order binary words lexicographically and sum the least word in each orbit to obtain a cocycle $z$. This is a finite, prescribed selection, and [F2, step 2.1, step 5.1]

$$\operatorname{Tr}_{1}^{C_p}(z)=(c+d)^{\otimes p}-c^{\otimes p}-d^{\otimes p}.$$

After tensoring with the invariant augmentation $\varepsilon$, the difference $\mathcal P(c+d)-\mathcal P(c)-\mathcal P(d)$ is therefore the transfer of $\varepsilon\otimes z$.

It remains to justify vanishing after diagonal pullback. Forgetting the $C_p$-action on the standard $W$, write an element of $R=\mathbb F_p[s]/(s^p)$ as $\sum a_i s^i$. Define

$$\alpha\!\left(\sum a_i s^i\right)=\sum_{i=1}^{p-1}a_i s^{i-1},\qquad \lambda\!\left(\sum a_i s^i\right)=a_{p-1}.$$

Use $\alpha$ as the contracting map from every even resolution degree to the next odd degree and $x\mapsto\lambda(x)\cdot1$ from every odd degree to the next even degree. The identities $s\alpha(x)+\lambda(s^{p-1}x)\cdot1=x$ in positive even degrees, $s^{p-1}\lambda(x)+\alpha(sx)=x$ in odd degrees, and $s\alpha(x)+\varepsilon(x)\cdot1=x$ in degree zero give an explicit contraction of $W$ to $\mathbb F_p$. Tensoring it with $C$ shows that ordinary cohomology of $W\times K$ is pulled back from $K$. Every such class is the restriction of the equivariant class $[w_0]\times a$ from step 5.1, so restriction from equivariant to ordinary cohomology is onto.

Transfer commutes with the diagonal pullback: for an equivariant chain map $f$ and an ordinary cochain $a$, direct substitution in the coset sum gives $\operatorname{Tr}(a\circ f)=\operatorname{Tr}(a)\circ f$. Given an ordinary class on $W\times K$, lift it through that onto restriction and apply [F2]; transfer of the class is zero because transfer after restriction is multiplication by $p=0$. Hence diagonal pullback kills the transferred mixed class above. Step 5.1's unique coordinate decomposition now gives $D_j(u+v)=D_j(u)+D_j(v)$ for every $j$.

7.1 Check degrees, endpoints, and choices. If $K$ is empty or its cellular complex is zero, every group and operation is zero. For a point and $q=0$, the only coordinate is $D_0(a)=a^p=a$ in $\mathbb F_p$; all positive $j$ vanish. The construction treats $p=2$ and odd primes in step 2.1, includes $j=0,pq$, and declares out-of-range $j$ zero. Zero classes use the zero cocycle and give zero by step 6.1. Degenerate singular simplices are inapplicable to this explicitly cellular finite-model lemma; no normalization quotient has been hidden, and the later singular extension must check them separately. The lexicographic mixed-word representatives are a finite explicit rule. AC from [F5] is used exactly in step 1.2 for the family of nonempty equivariant carrier-filling sets and nowhere else. [F5, step 1.1, step 1.2, step 2.1, step 5.1, step 6.1] ∎