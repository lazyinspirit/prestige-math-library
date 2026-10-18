---
id: thm-a1xa1-unequal-parameter-cells-give-a-canonical-basic-set
kind: theorem
title: The four weighted cells of A1×A1 give a canonical basic set at odd residue characteristic
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order, def-unequal-parameter-weight-function-and-coefficient-order, thm-arbitrary-rank-finite-parabolics-and-bruhat-subword, lem-simple-generator-weights-extend-to-a-weight-function, def-unequal-parameter-coxeter-hecke-algebra, lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity, thm-unequal-parameter-kazhdan-lusztig-basis, def-unequal-parameter-cells-and-cell-quotients, thm-unequal-parameter-cell-quotients-are-modules, def-canonical-basic-set-for-hecke-specialization, def-schur-elements-from-a-symmetrizing-trace, def-hh-canonical-hecke-trace-and-symmetrizing-form, thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; all groups, algebras, modules, and lattices are explicit and finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§3.1–5.2 and 8.1–8.3, PDF pp. 22–29 and 36–37: weight functions, the bar/KL basis, and cell quotients."
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, EPFL lecture notes (2006)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "§4.1, Theorem 4.11 and Definition 4.13, PDF pp. 15 and 22: the nonzero Schur-element condition for identity decomposition and the canonical basic-set criterion."
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, GTM 231 (2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "§§1.4–1.5 and 2.1–2.2, printed pp. 17–20 and 27–35: Coxeter relations, reduced words, and Bruhat subwords used in the local finite calculation."
---

## Statement

Let $W=\langle s,t\mid s^2=t^2=1,\ (st)^2=1\rangle$, the finite Weyl group $A_1\times A_1$, and let $L(s)=1,\ L(t)=2$. Form its weighted Hecke algebra with coefficient $v$ and the symmetric quadratic convention $(T_r-v^{L(r)})(T_r+v^{-L(r)})=0$. Let $O=\mathbb Z_p$ for an odd prime $p$, let $q=1+p$, and specialize $v\mapsto q$. Write $K=\mathbb Q_p$, $k=\mathbb F_p$, and let $D$ be the decomposition matrix of the four explicit $O$-lattices obtained from the cell quotients.

The left, right, and two-sided cells are the four singleton sets $\{1\},\{s\},\{t\},\{st\}$. Their four cell modules are pairwise distinct one-dimensional $K$-modules, and each has an $O$-stable rank-one lattice. Their reductions are the four distinct simple $H_k$-modules, so $D$ is the $4\times4$ identity matrix up to the displayed ordering. Consequently, relative to any integer-valued statistic $\alpha$ on the generic simple modules, these four cell modules form a canonical basic set in the sense of [[def-canonical-basic-set-for-hecke-specialization]].

This is a finite Weyl case. In Geck's normalization, its specialization also satisfies the exact hypothesis $\theta(c_\chi)\ne0$ for every generic irreducible character in Theorem 4.11; the proof below verifies the decomposition matrix directly.

## Facts & Assumptions

**Given:** The weighted Coxeter and Hecke conventions in the Statement, an odd prime $p$, and the definitions of the KL basis, cells, cell modules, and canonical basic set.

[F1] [[def-arbitrary-rank-coxeter-system-and-bruhat-order]] and [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]: the Coxeter presentation determines length and Bruhat order; reduced words and subwords give the finite lower intervals needed for triangularity.

[F2] [[def-unequal-parameter-weight-function-and-coefficient-order]] and [[lem-simple-generator-weights-extend-to-a-weight-function]]: a weight function is additive on length-additive products, and simple-generator labels extend exactly when they agree along finite odd-labelled edges.

[F3] [[def-unequal-parameter-coxeter-hecke-algebra]] and [[lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity]]: the Hecke generators satisfy their stated quadratic and braid relations, and the standard elements form a free coefficient-module basis after specialization to a commutative coefficient ring.

[F4] [[thm-unequal-parameter-kazhdan-lusztig-basis]]: the elements $C_w$ form a bar-invariant triangular basis, with $C_s=T_s+v^{-L(s)}$ for $L(s)>0$.

[F5] [[def-unequal-parameter-cells-and-cell-quotients]] and [[thm-unequal-parameter-cell-quotients-are-modules]]: coefficient transitions define the cell preorders, and the cell quotients are modules with bases given by their cell elements.

[F6] [[def-canonical-basic-set-for-hecke-specialization]]: for the chosen lattice decomposition matrix $D$, the minimum $\check\alpha_M$ and the two multiplicity/order conditions define a canonical basic set.

[F7] [[def-hh-canonical-hecke-trace-and-symmetrizing-form]] and [[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]]: for a finite Coxeter group, the coefficient of the identity standard basis element defines a trace with a symmetric perfect pairing, and this trace is preserved by commutative base change.

[F8] [[def-schur-elements-from-a-symmetrizing-trace]]: for a split semisimple algebra with symmetrizing trace $\tau$, the Schur elements $c_E$, when they exist, are the nonzero scalars in $\tau=\sum_E c_E^{-1}\chi_E$.

## Proof

**Given:** The presentation $W$, weights $L(s)=1,L(t)=2$, the specialization $v\mapsto q=1+p$, and the facts above.

1.1 From $(st)^2=1$ and $s^2=t^2=1$, $st=(st)^{-1}=ts$. Thus every word reduces to one of $1,s,t,st$. The homomorphism to $(\mathbb Z/2\mathbb Z)^2$ sending $s\mapsto(1,0)$, $t\mapsto(0,1)$ respects all relators and separates these four elements, so they are distinct. Their lengths are $0,1,1,2$, respectively. Since the only finite edge has even label $2$, the odd-edge condition in [F2] permits the unequal labels $1,2$; it gives a well-defined weight function $L$. [F1, F2, construct, algebra]

2.1 Put $C_1=1$, $C_s=T_s+v^{-1}$, and $C_t=T_t+v^{-2}$. The rank-two relations give $T_s^2=(v-v^{-1})T_s+1$ and $T_t^2=(v^2-v^{-2})T_t+1$, so direct expansion gives $C_s^2=(v+v^{-1})C_s$ and $C_t^2=(v^2+v^{-2})C_t$. The generators commute because $m(s,t)=2$, and $C_{st}:=C_sC_t=C_tC_s=T_{st}+v^{-2}T_s+v^{-1}T_t+v^{-3}$. These elements are bar invariant and have leading standard term $T_w$ with lower Bruhat support and negative coefficients; uniqueness in [F4] identifies them as the KL basis. [F1, F3, F4, step 1.1, algebra]

2.2 For $r\in\{s,t\}$, set $a_s=q$, $a_t=q^2$. The specialized quadratic relation is $(T_r-a_r)(T_r+a_r^{-1})=0$. Since $a_r+a_r^{-1}\equiv2\pmod p$, it is a unit in $O$, so $e_r^+=(T_r+a_r^{-1})/(a_r+a_r^{-1})$ and $e_r^-=(a_r-T_r)/(a_r+a_r^{-1})$ belong to $H_O$. They sum to $1$, their product is zero by the quadratic relation, and $(T_r-a_r)e_r^+=(T_r+a_r^{-1})e_r^-=0$, so they are complementary idempotents. Every rank-one element $b+cT_r$ equals $(b+ca_r)e_r^+ +(b-ca_r^{-1})e_r^-$, making both summands free of rank one. The commuting rank-one subalgebras tensor to $H_O$ with the standard rank-four basis [F3], so the four products $e_s^\epsilon e_t^\delta$ give $H_O\cong O^4$ and hence $H_K\cong K^4$, $H_k\cong k^4$. [F3, step 1.1, algebra]

3.1 The complete left-product table is determined by $C_sC_1=C_s$, $C_tC_1=C_t$, $C_s^2=(v+v^{-1})C_s$, $C_tC_s=C_{st}$, $C_sC_t=C_{st}$, $C_t^2=(v^2+v^{-2})C_t$, $C_sC_{st}=C_s^2C_t=(v+v^{-1})C_{st}$, and $C_tC_{st}=C_sC_t^2=(v^2+v^{-2})C_{st}$. The right table is identical because the algebra is commutative. With an arrow $y\to x$ when $C_x$ occurs in $C_rC_y$ or $C_yC_r$, the only non-loop arrows are $1\to s$, $1\to t$, $s\to st$, and $t\to st$. No transition points back, so mutual comparability has four singleton classes for each left, right, and two-sided preorder. [F3, F4, step 2.1, algebra]

4.1 In the quotient for $\{1\}$, both $C_s$ and $C_t$ vanish, so $T_s=C_s-v^{-1}$ and $T_t=C_t-v^{-2}$ act by $-v^{-1}$ and $-v^{-2}$. In the quotient for $\{s\}$, $C_tC_s=C_{st}$ vanishes while $C_s^2=(v+v^{-1})C_s$; hence $(T_s,T_t)$ acts by $(v,-v^{-2})$. In the quotient for $\{t\}$, $C_sC_t=C_{st}$ vanishes, so $T_s$ acts by $-v^{-1}$; $C_t^2=(v^2+v^{-2})C_t$ gives $T_t$-eigenvalue $v^2$. In the quotient for $\{st\}$, $C_sC_{st}=(v+v^{-1})C_{st}$ and $C_tC_{st}=(v^2+v^{-2})C_{st}$, so the action is $(v,v^2)$. By [F5] each is a well-defined one-dimensional cell module. Their four eigenvalue pairs are distinct over $K$, since $q+q^{-1}\ne0$ and $q^2+q^{-2}\ne0$ in the characteristic-zero field $K$. [F3, F4, F5, step 3.1, algebra]

5.1 The four cell characters from step 4.1 take values in $O$, so $\Lambda=O$ with the displayed scalar actions is an $H_O$-stable rank-one lattice for each. Their reductions have $T_s,T_t$ eigenvalues respectively $(-1,-1)$, $(1,-1)$, $(-1,1)$, and $(1,1)$ in $k$. Since $p$ is odd these are four distinct characters of $H_k\cong k^4$; each is simple, and each reduced lattice has composition multiplicity one for exactly its matching character. Thus $D=I_4$, up to ordering. [F5, step 4.1, step 2.2]

6.1 Let $K_0=\mathbb Q(v)$ be the generic coefficient field and put $U_r=v^{L(r)}T_r$, which has eigenvalues $Q_r=v^{2L(r)}$ and $-1$. By [F7], the canonical trace on the normalized standard basis $U_w$ takes value $1$ on the identity and $0$ on nonidentity elements, and its generic pairing is symmetrizing. For one rank-one factor, the algebra over $K_0$ is $K_0\times K_0$, with characters $\chi_+(U_r)=Q_r$, $\chi_-(U_r)=-1$. By [F8], write $\tau=c_+^{-1}\chi_++c_-^{-1}\chi_-$. Evaluating at $1$ and $U_r$ gives $c_+^{-1}+c_-^{-1}=1$ and $Q_rc_+^{-1}-c_-^{-1}=0$; solving yields $c_+=1+Q_r$ and $c_-=1+Q_r^{-1}$. For $A_1\times A_1$, the algebra and trace are tensor products of the rank-one factors, so the four Schur elements are products of one term from $\{1+v^2,1+v^{-2}\}$ and one from $\{1+v^4,1+v^{-4}\}$. Under the residue map $v\mapsto1$ in $k$, each product is $4\ne0$. Thus Geck's Theorem 4.11 has its exact finite-Weyl and nonvanishing hypotheses here and gives the identity decomposition matrix; step 5.1 has already proved the same conclusion directly. [F7, F8, step 1.1, step 2.2, step 5.1, algebra]

7.1 For any integer-valued $\alpha$, an identity decomposition matrix has exactly one nonzero entry in each column, equal to $1$. Thus for each simple $M$, $\check\alpha_M$ is the $\alpha$-value of its matching cell module; all other rows in that column vanish. Both conditions in [F6] hold, so the four cell modules form a canonical basic set. The claim is restricted to this explicit finite Weyl group and this odd-characteristic specialization. [F6, step 5.1] ∎
