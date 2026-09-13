---
id: thm-simple-postnikov-stages-are-classified-by-k-invariants
kind: theorem
title: Simple Postnikov stages are classified by k-invariants
status: draft
origin: pipeline
deps: ["def-postnikov-k-invariant", "thm-obstruction-theory-for-lifting-through-a-fibration", "thm-eilenberg-maclane-spaces-represent-singular-cohomology", "thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces", "def-homotopy-fiber-of-a-map", "thm-mapping-path-factorization", "def-fiber-and-fiber-homotopy-equivalence", "def-hurewicz-and-serre-fibrations", "thm-long-exact-sequence-of-homotopy-groups-of-a-fibration", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: James Davis and Paul Kirk, Lecture Notes in Algebraic Topology
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: Section 7.12.1, Theorems 7.40--7.41 and the k-invariant construction, printed pages 192--194
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: Lectures 12 and 14, Postnikov sections and representability, printed pages 37--40 and 43--47
    - title: J. P. May and Kate Ponto, More Concise Algebraic Topology
      url: https://www.math.uchicago.edu/~may/PAPERS/116.pdf
      locator: Section 3.4, Lemma 3.4.2 and proof, printed pages 57--61; low-degree transgression, marking correction, and path-pullback equivalence
    - title: Rolf Schon, Fibrations Over a CWh-Base
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf
      locator: Theorem 2 and Proposition 3, printed page 165; CW type of Hurewicz fibration totals and fibers
---

## Statement

Assume AC. Let $n\geq2$, let $B$ be a connected simple CW $(n-1)$-type, and let $A$ be an abelian group. Marked simple Postnikov extensions of $B$ by $A$--that is, ordinary Hurewicz fibration stages with fibers of CW homotopy type $K(A,n)$,

$$ F\simeq K(A,n)\longrightarrow E\xrightarrow{q}B, $$

with trivial monodromy and fixed identifications of the base and fiber group--are classified up to fiber homotopy equivalence by

$$ k(q)\in H^{n+1}(B;A). $$

For $k\in H^{n+1}(B;A)$, choose $\kappa:B\to K(A,n+1)$ with $\kappa^*\iota_{n+1}=k$; the corresponding stage is $E_k=\operatorname{hofib}(\kappa)$. If the marking $\pi_n(K(A,n))\cong A$ is forgotten, $\operatorname{Aut}(A)$ acts on the classification, and unmarked stages over the fixed base are classified by the resulting orbits.

## Facts & Assumptions

[F1] Representability gives a based map $\kappa$ for every $k$, unique up to based homotopy ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

[F2] Apply [[thm-mapping-path-factorization]] to the inclusion $*\to K(A,n+1)$: its endpoint projection from paths starting at $*$ is a Hurewicz fibration, and its total path space contracts by the explicit reparametrization in that theorem. Precomposition with $t\mapsto1-t$ is a homeomorphism of the compact-open path space (and its kification), from the terminal-point-fixed model $P^-K=\{\gamma:\gamma(1)=*\}$ used below to the initial-point-fixed model; it identifies the projection $\gamma\mapsto\gamma(0)$ with endpoint evaluation and acts on the loop fiber by inversion.

[F3] A fibration long exact sequence computes homotopy groups of a pullback homotopy fiber ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] The homotopy-fiber definition fixes the endpoint convention used in $E_k$ ([[def-homotopy-fiber-of-a-map]]).

[F5] The primary section obstruction is the marked $k$-invariant and is preserved by marked fiber homotopy equivalence ([[def-postnikov-k-invariant]], [[thm-obstruction-theory-for-lifting-through-a-fibration]]). May--Ponto, Lemma 3.4.2, identifies $\Omega K(A,n+1)$ up to homotopy with $K(A,n)$, proves the low-degree cohomological transgression calculation, and constructs a fiber-homotopy equivalence from a fibration with $K(A,n)$ fiber and trivial monodromy to the path-fibration pullback representing its transgression. Its proof also corrects the induced fiber endomorphism to the specified marking.

[F6] For a Hurewicz fibration, CW-type base and fiber imply CW-type total space (Schon, Theorem 2), while CW-type total space and base imply CW-type fiber (Schon, Proposition 3). The term Hurewicz has the ordinary homotopy-lifting meaning in [[def-hurewicz-and-serre-fibrations]]. Thus the representability and fiberwise Whitehead steps used below apply to the stated stage presentations and to the terminal-path model.

[A1] AC is inherited from representability, obstruction realization, and homotopy uniqueness of the fiber models ([[def-axiom-of-choice]], [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]]).

## Proof

**Given:** $B,A,n,k$ and [A1] as in the statement.

1.1 Choose $\kappa$ by [F1] and form the pullback [F1, F2, F4]

$$ E_k=\{(b,\gamma):\gamma(0)=\kappa(b),\ \gamma(1)=*\}\longrightarrow B. $$

Path reversal in [F2] identifies this terminal-point-fixed construction with a pullback of the published initial-point-fixed path fibration, so it is Hurewicz. Its fiber is $\Omega K(A,n+1)$, whose homotopy groups satisfy $\pi_i\cong\pi_{i+1}K(A,n+1)$ by [F3]. The full initial-path space contracts by [F2], and its base $K(A,n+1)$ is CW; hence Schon [F6] gives CW type to its loop fiber. May--Ponto [F5] identifies this CW-type fiber up to homotopy with $K(A,n)$. Use the literal terminal-path loop coordinate for its marking; reversal changes that marking by inversion relative to the initial-path model. [A1, F1, F2, F3, F4, F5, F6]

1.2 We record the exact low-degree calculation needed for completeness, rather than postulate a fibration of spaces of fiberwise equivalences. Let $q:E\to B$ be a marked stage in the Statement, with fiber $F\simeq K(A,n)$ over the chosen basepoint. Since the base and fiber have CW type and $q$ is Hurewicz, [F6] gives CW type for $E$. The fiber fundamental class identifies $H^n(F;A)$ with $\operatorname{End}(A)$: its evaluation on $\pi_n(F)=A$ is the indicated endomorphism, and the chosen marking makes the fundamental class $\operatorname{id}_A$. Trivial monodromy makes this a constant coefficient group over $B$. [F1, F5, F6]

Filter the cochains of $E$ by the inverse images of the CW skeleta of $B$, as in the low-degree calculation proved by May--Ponto [F5]. The resulting cohomological Serre page has $E_2^{p,r}=H^p(B;H^r(F;A))$. Because $H^r(F;A)=0$ for $0<r<n$, the first possible differential from $E_2^{0,n}=\operatorname{End}(A)$ is the transgression $d_{n+1}$ into $E_{n+1}^{n+1,0}=H^{n+1}(B;A)$; no other differential can enter that latter group in these degrees. The filtration edge maps therefore give the exact segment [F5]

$$ H^n(E;A)\xrightarrow{i^*}\operatorname{End}(A)\xrightarrow{\tau_q}H^{n+1}(B;A)\xrightarrow{q^*}H^{n+1}(E;A). $$

Fix the sign of $\tau$ by the library's terminal-path convention: the path fibration with paths from the variable point to $*$ sends $\operatorname{id}_A$ to $+\iota_{n+1}$. May--Ponto computes $d_{n+1}(\operatorname{id}_A)=+\iota_{n+1}$ for paths in the reverse direction. Path reversal changes the literal loop-fiber marking by inversion, so in our terminal-path coordinates the same differential sends $\operatorname{id}_A$ to $-\iota_{n+1}$; put $\tau_q=-d_{n+1}$ uniformly. This sign change does not alter the exact segment. On an oriented relative $(n+1)$-cell, $\tau_q(\operatorname{id}_A)$ evaluates its attaching $n$-sphere in $\pi_n(F)=A$ with the primary section-obstruction sign of [F5]. Thus [F5]

$$ \tau_q(\operatorname{id}_A)=k(q),\qquad \tau_{E_\kappa}(\operatorname{id}_A)=\kappa^*\iota_{n+1}. $$

2.1 Since $B$ has no homotopy above $n-1$, the long exact sequence applied to the construction in Step 1.1 gives $\pi_i(E_k)\cong\pi_i(B)$ for $i<n$, $\pi_n(E_k)\cong A$, and $\pi_i(E_k)=0$ for $i>n$. Thus $E_k\to B$ is a Postnikov stage with the required marking. [F3, step 1.1]

2.2 For the stage constructed in Step 1.1, the terminal-path normalization in Step 1.2 identifies the primary section obstruction of the universal path fibration with $+\iota_{n+1}$. A section over a subcomplex is a nullhomotopy of the inclusion there; on an attaching cell its failure is the same oriented sphere evaluated by the transgression. Naturality under pullback gives [F1, F2, F5, step 1.1, step 1.2]

$$ k(E_k\to B)=\kappa^*\iota_{n+1}=k. $$

[F1, F2, F5, step 1.2]

2.3 If two representatives of the construction in Step 1.1 are homotopic, pull the path fibration back over their homotopy $B\times I\to K(A,n+1)$. Homotopy lifting along $I$ gives mutually inverse maps between the endpoint pullbacks over $B$, with composites fiberwise homotopic to the identities. Hence the fiber homotopy type of $E_k$ depends only on $k$. [F2, step 1.1]

2.4 Now start with an arbitrary marked Hurewicz stage $q:E\to B$. Set $k=k(q)$ and choose a based representative $\kappa:B\to K(A,n+1)$ by [F1]. Exactness at $H^{n+1}(B;A)$ in Step 1.2 gives $q^*k=0$; geometrically, the pullback of $q$ along itself has its diagonal section, so its section obstruction vanishes. Since [F6] gives $E$ CW type, [F1] makes $\kappa q:E\to K(A,n+1)$ based nullhomotopic. Choose a based nullhomotopy $h(e,-)$ running from $\kappa(q(e))$ to $*$. The endpoint condition in [F4] then defines a continuous map over $B$ [A1, F1, F4, F5, F6, step 1.2]

$$ \lambda_0:E\longrightarrow E_\kappa,\qquad e\longmapsto(q(e),h(e,-)). $$

Its restriction to the marked fiber induces some endomorphism $c:A\to A$. No claim that $c$ is yet invertible is made. [F4, step 1.2]

3.1 We correct the fiber marking of $\lambda_0$ explicitly. Naturality of the transgression in Step 1.2 for the map $\lambda_0$ over $B$ says [F5, step 1.2, step 2.4]

$$ \tau_q(c)=\tau_{E_\kappa}(\operatorname{id}_A)=k=\tau_q(\operatorname{id}_A). $$

Hence $\operatorname{id}_A-c\in\ker\tau_q$. Exactness in Step 1.2 supplies a class $\ell\in H^n(E;A)$ whose restriction to $F$ is $\operatorname{id}_A-c$. By [F1, F5, F6], represent $\ell$ by a based map $L:E\to\Omega K(A,n+1)$, using the literal terminal-loop identification of that CW-type space with $K(A,n)$. Append the loop $L(e)$ to the path $h(e,-)$ in Step 2.4, using a fixed linear reparametrization of their two halves. This changes no starting point or endpoint, and gives a continuous map over $B$ [F1, F2, F4, F5, F6, step 1.2, step 2.4]

$$ \lambda(e)=\bigl(q(e),h(e,-)*L(e)\bigr):E\longrightarrow E_\kappa. $$

Loop multiplication represents addition of the corresponding degree-$n$ cohomology classes, as in May--Ponto's proof cited in [F5]. Therefore the restriction of $\lambda$ to $F$ induces $c+(\operatorname{id}_A-c)=\operatorname{id}_A$ on $\pi_n(F)=A$. Both fibers have the homotopy type $K(A,n)$, so this restriction is a homotopy equivalence. May--Ponto's mapping-path lifting argument then promotes $\lambda$ to a fiber homotopy equivalence over the CW base; it does not merely infer a fiberwise inverse from a pointwise weak equivalence. This proves that every marked stage is represented by the path pullback of its own $k(q)$. [F5, F6, step 1.2, step 2.4]

4.1 If two marked stages have the same $k$-invariant, [F1] makes their representing maps $\kappa$ based homotopic. Step 2.3 identifies the corresponding path pullbacks by a fiber homotopy equivalence, and Step 3.1 identifies each original stage with its path pullback through a fiber map inducing the fixed identity marking. Thus the two original stages are marked fiber homotopy equivalent. Conversely, the exact segment of Step 1.2 is natural under a marked fiber homotopy equivalence, so the transgression of $\operatorname{id}_A$, hence $k(q)$, is preserved. This proves injectivity as well as surjectivity; no unconstructed comparison-space fibration is used. [F1, F5, step 1.2, step 2.3, step 3.1]

5.1 Step 2.2 proves every cohomology class occurs, and Step 4.1 proves the claimed bijection. Replacing the fiber marking by $\alpha\in\operatorname{Aut}(A)$ postcomposes each obstruction value by $\alpha$, so it sends $k$ to $\alpha_*k$. Therefore forgetting the marking takes precisely the $\operatorname{Aut}(A)$-orbits. A base self-equivalence would additionally act by pullback, but the statement fixes the base. For $A=0$ the exact segment has a zero endomorphism group and Step 3.1 still identifies every stage with the product-stage homotopy type. Nontrivial monodromy would require local coefficients and lies outside this untwisted theorem. $\square$ [A1, F5, step 2.2, step 4.1]
