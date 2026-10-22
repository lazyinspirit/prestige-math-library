---
id: lem-qftx-finite-groupoid-push-pull-fubini
kind: lemma
title: "Finite groupoid push-pull satisfies Fubini and adjunction"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
deps:
  - def-qftx-finite-groupoid-integration
  - def-qftx-finite-homotopy-pullback
justified_by: []
aliases: []
domain: mathematics
library: mathematics
dependency_roles:
  def-qftx-finite-groupoid-integration: mathematical-premise
  def-qftx-finite-homotopy-pullback: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "No choice principle is used; all groupoids and all indexing sets are finite."
proof_strategy: direct
sources:
  references:
    - title: "Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology"
      url: "https://arxiv.org/pdf/2510.07408"
      locator: "§§23.2–23.3, PDF pp. 92–99, for homotopy pullbacks of correspondences and pushforward weighted by homotopy cardinality."
    - title: "Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group"
      url: "https://www.math.ru.nl/~mueger/TQFT/FQ.pdf"
      locator: "§2, PDF pp. 8–11, Lemma 2.4 and Theorem 2.13, for stabilizer measures and the gluing law."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $p:\mathcal X\to\mathcal Y$ and $q:\mathcal Y\to\mathcal Z$ be functors of finite groupoids. The iterated homotopy fiber over any $z\in\mathcal Z$ is equivalent to the homotopy fiber of $q\circ p$, so $(q\circ p)_!=q_!p_!$. Consequently, for composable spans of finite groupoids, the induced push-pull maps compose by the homotopy-pullback composite span. If $\mathcal X\xleftarrow{a}\mathcal E\xrightarrow{b}\mathcal Y$ is a span, equip invariant functions with

$$\langle f,g\rangle_{\mathcal X}:=\sum_{[x]\in\pi_0(\mathcal X)} \frac{\overline{f([x])}\,g([x])}{|\operatorname{Aut}_{\mathcal X}(x)|}.$$

Then the adjoint of $b_!a^*$ is $a_!b^*$, the map of the transposed span.

## Statement references

[[def-qftx-finite-groupoid-integration]]

[[def-qftx-finite-homotopy-pullback]]

## Facts & Assumptions

**Given:** Finite groupoids and functors as in the Statement, and invariant complex-valued functions on their isomorphism classes.

[F1] [[def-qftx-finite-groupoid-integration]]: homotopy-fiber objects are pairs $(c,\alpha:p(c)\cong d)$; integration weights each class by the reciprocal automorphism-group order; a span acts by pushforward after pullback.

[F2] [[def-qftx-finite-homotopy-pullback]]: the homotopy pullback of $b:\mathcal E\to\mathcal Y$ and $c:\mathcal F\to\mathcal Y$ has objects $(e,f,\alpha:b(e)\cong c(f))$ and compatible pairs of arrows.

## Proof

1.1 For fixed $z\in\mathcal Z$, an object of the iterated fiber is $(y,\beta:q(y)\to z,x,\alpha:p(x)\to y)$. The functor $(y,\beta,x,\alpha)\mapsto(x,\beta\circ q(\alpha))$ maps it to $(\mathcal X)_z$. A quasi-inverse sends $(x,\gamma:q(p(x))\to z)$ to $(p(x),\gamma,x,\operatorname{id}_{p(x)})$. The composite on $(\mathcal X)_z$ is the identity. For any iterated object, the isomorphism $\alpha:p(x)\to y$ and $\operatorname{id}_x$ give a natural isomorphism from the quasi-inverse image back to that object. Hence the functor is an equivalence. [given, F1, construct]

1.2 Fix an isomorphism class $[e]$ of $\mathcal E$, set $y=b(e)$, and write $A=\operatorname{Aut}_{\mathcal Y}(y)$, $B=\operatorname{Aut}_{\mathcal E}(e)$, $I=\operatorname{im}(B\to A)$, and $N=\ker(B\to A)$. The classes in the homotopy fiber $\mathcal E_y$ represented by this $[e]$ are the orbits of $I$ on the $A$-torsor of isomorphisms $b(e)\cong y$, so there are $|A|/|I|$ of them; each has automorphism group $N$. Their contribution after the outer factor $1/|A|$ is $f([e])/(|I||N|)=f([e])/|B|$, by the finite homomorphism counting identity $|B|=|I||N|$. Summing over $[e]$ proves $\int_{y\in\mathcal Y} b_!f(y)=\int_{e\in\mathcal E} f(e)$. [given, F1, algebra]

2.1 Compose spans $\mathcal X\xleftarrow{a}\mathcal E\xrightarrow{b}\mathcal Y$ and $\mathcal Y\xleftarrow{c}\mathcal F\xrightarrow{d}\mathcal Z$, and let $P=\mathcal E\times^h_{\mathcal Y}\mathcal F$ with projections $\pi_E,\pi_F$. For fixed $z\in\mathcal F$, the homotopy fiber of $\pi_F$ over $z$ has objects $((e,f',\alpha),\tau:f'\cong z)$. The functor to $\mathcal E_{c(z)}$ sends this object to $(e,c(\tau)\circ\alpha)$ and sends an arrow $(u,v)$ to $u$. Such an arrow satisfies $\tau'\circ v=\tau$ and $c(v)\circ\alpha=\alpha'\circ b(u)$, so its image satisfies $\beta'\circ b(u)=\beta$. Conversely, for any such $u$ between images $(e,\beta)$ and $(e',\beta')$, the only possible lift has $v=(\tau')^{-1}\circ\tau:f'\to f''$; the equation $\beta'\circ b(u)=\beta$ implies $c(v)\circ\alpha=\alpha'\circ b(u)$, so this lift exists and is unique. The functor is fully faithful; every object $(e,\beta)$ is its image from $((e,z,\beta),\operatorname{id}_z)$, so it is essentially surjective. It is therefore an equivalence. By [F1], equivalent fibers have equal finite integrals, giving $c^*b_!g=(\pi_F)_!\pi_E^*g$ for every invariant function $g$ on $\mathcal E$. Applying step 1.1 to $\pi_F$ and $d$ now gives $d_!c^*b_!a^*f=(d\circ\pi_F)_!(a\circ\pi_E)^*f$, which is the push-pull map of the homotopy-pullback composite span. [F1, F2, step 1.1, construct]

2.2 Put $\phi([e]):=\overline{f([a(e)])}g([b(e)])$, which is invariant on $\pi_0(\mathcal E)$. Expanding the left inner product by the definition of $b_!$ gives $\langle b_!a^*f,g\rangle_{\mathcal Y}=\sum_{[y]}\frac{1}{|\operatorname{Aut}_{\mathcal Y}(y)|}\sum_{[(e,\eta)]\in\pi_0(\mathcal E_y)}\frac{\overline{f([a(e)])}g([y])}{|\operatorname{Aut}_{\mathcal E_y}(e,\eta)|}$. Since $\eta:b(e)\cong y$ and $g$ is invariant, $g([y])=g([b(e)])$, so this is $\int_{y\in\mathcal Y}b_!\phi(y)=\int_{e\in\mathcal E}\phi(e)=\sum_{[e]}\frac{\phi([e])}{|\operatorname{Aut}_{\mathcal E}(e)|}$ by step 1.2. On the other side, expanding $a_!b^*g$ and using $\xi:a(e)\cong x$ to replace $\overline{f([x])}$ by $\overline{f([a(e)])}$ gives $\langle f,a_!b^*g\rangle_{\mathcal X}=\sum_{[x]}\frac{1}{|\operatorname{Aut}_{\mathcal X}(x)|}\sum_{[(e,\xi)]\in\pi_0(\mathcal E_x)}\frac{\phi([e])}{|\operatorname{Aut}_{\mathcal E_x}(e,\xi)|}=\int_{x\in\mathcal X}a_!\phi(x)=\int_{e\in\mathcal E}\phi(e)$, again by step 1.2. Both inner products therefore equal the same finite weighted sum, proving the adjoint identity. [F1, step 1.2, algebra]

3.1 Step 2.2 proves that the adjoint of $b_!a^*$ is $a_!b^*$, and steps 1.1 and 2.1 prove composition through homotopy-pullback spans. [step 1.1, step 2.1, step 2.2] ∎
