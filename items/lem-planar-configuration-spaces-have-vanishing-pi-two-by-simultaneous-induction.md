---
id: lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction
kind: lemma
title: "Vanishing $\\pi_2$ for every ordered planar configuration space"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-fadell-neuwirth-forgetful-fibration, lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 2.1, printed pp. 11-14 (the exact sequences of the pure braid tower and the pi_2 vanishing induction)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Edward Fadell and Lee Neuwirth, Configuration Spaces, section II, printed pp. 111-114 and section III, printed pp. 114-115"
      url: "https://tidsskrift.dk/math/article/download/10517/8538"
---

## Statement

Assume the Axiom of Choice. For every $n\ge1$ and every base configuration
$q\in F_n(\operatorname{int}D^2)$ one has
$$\pi_2\bigl(F_n(\operatorname{int}D^2),q\bigr)=0 .$$
The same conclusion holds for $F_n(\mathbb C)$ under the coordinatewise
radial homeomorphism $\mathbb C\to\operatorname{int}D^2$,
$w\mapsto w/(1+|w|)$, applied to every coordinate, and for $F_n(D^2)$
under the published inclusion homotopy equivalence
$F_n(\operatorname{int}D^2)\to F_n(D^2)$.

## Facts & Assumptions

**Given:** the Axiom of Choice (AC) and, for every $n\ge1$, an arbitrary base configuration $q=(q_1,\dots,q_n)\in F_n(\operatorname{int}D^2)$; write $M:=\operatorname{int}D^2$ and $M\setminus\{q_1,\dots,q_{n-1}\}$ for the complement of the first $n-1$ coordinates.

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[F1] In ZF, AC implies DC, and DC implies countable choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] Let $M$ be a nonempty connected Hausdorff topological $d$-manifold without boundary with $d\ge2$ and let $m,n\ge1$; the map $\pi:F_{m+n}(M)\to F_m(M)$, $\pi(x_1,\dots,x_{m+n}):=(x_1,\dots,x_m)$, has fibre $\pi^{-1}(q')\cong F_n(M\setminus Q_{q'})$ over every base configuration $q'$, it is a locally trivial fibre bundle with that fibre type, and if $M=\operatorname{int}D^2$ then under AC and DC the bundle may be taken numerable and is therefore a Hurewicz fibration ([[thm-fadell-neuwirth-forgetful-fibration]]).

[F3] For a based Serre fibration $p:(E,e_0)\to(B,b_0)$ with fibre $F=p^{-1}(b_0)$ the segment
$$\pi_2(F)\xrightarrow{i_*}\pi_2(E)\xrightarrow{p_*}\pi_2(B)\xrightarrow{\partial_p}\pi_1(F)$$
of the long exact sequence is exact, exactness meaning that the incoming image equals the inverse image of the distinguished element ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F4] For every finite set $Q$ of $k$ distinct points of $\operatorname{int}D^2$, $\pi_j(\operatorname{int}D^2\setminus Q)=0$ for every $j\ge2$, and for $k=0$ the space $\operatorname{int}D^2$ is contractible; the same conclusions hold for $\mathbb C$ minus $k$ points under the explicit radial homeomorphism $h(w)=w/(1+|w|)$ ([[lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles]]).

[F5] A based homotopy equivalence $f:(X,x)\to(Y,f(x))$ induces isomorphisms $f_*:\pi_j(X,x)\to\pi_j(Y,f(x))$ for all $j\ge1$, and the inclusion $\iota^F:F_n(\operatorname{int}D^2)\to F_n(D^2)$ is a homotopy equivalence with $\iota^F_*$ an isomorphism on fundamental groups at every configuration of interior points ([[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]], [[lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent]]).

## Proof

**Proof technique:** induction on $n$.

1.1 **The fibre fact.** By [F4], for every finite set $Q$ of distinct points of $\operatorname{int}D^2$ the complement $\operatorname{int}D^2\setminus Q$ has vanishing $\pi_j$ in every degree $j\ge2$ and, when $Q$ is empty, is contractible; in particular every group $\pi_2(\operatorname{int}D^2\setminus Q)$ is trivial. [F4]

1.2 **Transferring the conclusion.** The coordinatewise map $h^{(n)}:\mathbb C^n\to(\operatorname{int}D^2)^n$, $h(z_1,\dots,z_n)=(h(z_1),\dots,h(z_n))$, restricts to a homeomorphism $F_n(\mathbb C)\to F_n(\operatorname{int}D^2)$, and the inclusion $\iota^F:F_n(\operatorname{int}D^2)\to F_n(D^2)$ is a homotopy equivalence; by [F5] both induce isomorphisms on all homotopy groups in degrees $\ge1$, so vanishing of $\pi_2$ transfers in either direction and at the corresponding basepoints. [F4, F5]

1.3 **Base case $n=1$.** For $n=1$ single-coordinate evaluation is a homeomorphism $F_1(\operatorname{int}D^2)\cong\operatorname{int}D^2$, which is the case $k=0$ of the vanishing statement in [F4], so $\pi_2(F_1(\operatorname{int}D^2),q)=0$ for the arbitrary base configuration $q$. [base, F4]

1.4 **Induction hypothesis.** Fix $n\ge2$ and assume, for every base configuration $b\in F_{n-1}(\operatorname{int}D^2)$, that $\pi_2(F_{n-1}(\operatorname{int}D^2),b)=0$. [ih]

1.5 **The forgetful fibration.** By [F1], the Axiom of Choice [A1] yields the Axiom of Dependent Choice, so the choice hypotheses of [F2] are met; fixing $n\ge2$ and a base configuration $q$, the map $p_n:F_n(\operatorname{int}D^2)\to F_{n-1}(\operatorname{int}D^2)$, $(x_1,\dots,x_n)\mapsto(x_1,\dots,x_{n-1})$, is of the form in [F2] with $m=n-1\ge1$ and one forgotten point on the manifold $M=\operatorname{int}D^2$, and is therefore a Hurewicz, hence Serre, fibration; over $b:=p_n(q)=(q_1,\dots,q_{n-1})$ its fibre is $p_n^{-1}(b)=F_1(\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\})=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$, which contains $q$ because $q_n\notin\{q_1,\dots,q_{n-1}\}$. This use of AC is the only one in the proof, and it is used solely to invoke [F2]. [A1, F1, F2]

2.1 **The induction step.** Let $q\in F_n(\operatorname{int}D^2)$ be arbitrary and let $p_n$, $b=p_n(q)$ and the fibre $F=\operatorname{int}D^2\setminus\{q_1,\dots,q_{n-1}\}$ be as in step 1.5, so that $q\in F$. The map $p_n$ is a based Serre fibration, so the exact segment $\pi_2(F)\xrightarrow{i_*}\pi_2(F_n(\operatorname{int}D^2),q)\xrightarrow{p_{n*}}\pi_2(F_{n-1}(\operatorname{int}D^2),b)\xrightarrow{\partial}\pi_1(F)$ of [F3] is available. The term $\pi_2(F)$ is zero by step 1.1, and $\pi_2(F_{n-1}(\operatorname{int}D^2),b)=0$ by the induction hypothesis of step 1.4, so exactness gives $\operatorname{im}(i_*)=\ker(p_{n*})=0$ and $\operatorname{im}(p_{n*})=\ker(\partial)=0$; hence $p_{n*}$ is both injective and zero, and therefore $\pi_2(F_n(\operatorname{int}D^2),q)=0$. [step 1.1, step 1.4, step 1.5, F3]

3.1 **Induction conclusion.** Step 1.3 is the base case and step 2.1 proves the successor implication for arbitrary $n\ge2$ and arbitrary base configuration, so by induction $\pi_2(F_n(\operatorname{int}D^2),q)=0$ for every $n\ge1$ and every $q\in F_n(\operatorname{int}D^2)$. [step 1.3, step 2.1, discharge-induction]

4.1 **The plane and closed-disc models.** Applying the homeomorphism and the homotopy equivalence of step 1.2 to the result of step 3.1 gives $\pi_2(F_n(\mathbb C),q')=0$ for every $q'\in F_n(\mathbb C)$ and $\pi_2(F_n(D^2),q'')=0$ for every $q''\in F_n(D^2)$, which is the full statement. [step 3.1, step 1.2, discharge-induction]

∎
