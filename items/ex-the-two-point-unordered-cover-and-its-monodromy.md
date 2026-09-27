---
id: ex-the-two-point-unordered-cover-and-its-monodromy
kind: example
title: "The two-point unordered cover of the plane and the monodromy of a half turn"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [ex-two-point-ordered-configurations-of-the-plane,
       def-ordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-finite-symmetric-group-and-permutation-notation,
       def-unordered-configuration-space, def-quotient-topology,
       thm-initial-and-final-characteristic-properties,
       def-product-topology, def-subspace-topology-top,
       def-continuous-map-top, thm-continuity-characterisations-top,
       thm-product-universal-property, lem-continuity-is-local-and-pastes,
       def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field,
       lem-complex-conjugation-and-modulus-laws,
       def-complex-conjugate-real-imaginary-part-and-modulus,
       def-complex-metric-convergence-and-continuity, def-metric-ball,
       def-metric-topology, def-interval,
       lem-vector-operations-are-continuous-in-a-normed-space,
       thm-metric-hausdorff-separation,
       lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations,
       def-covering-map-and-evenly-covered-neighbourhoods,
       thm-path-lifting-for-covering-maps,
       def-monodromy-action-on-a-covering-fibre,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan González-Meneses, Basic results on braid groups, §§1.1–1.3 and 2.1, printed pp. 3–6, 11–13"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
---

## Example

Fix an ordered configuration $q\in F_2(\mathbb C)$ and let
$$(c_0,w_0):=\Phi(q)=\Big(\frac{q_1+q_2}{2},\,q_2-q_1\Big)$$
be its centre and difference coordinates, so that $w_0\in\mathbb C^\times=\mathbb C\setminus\{0\}$ ([[ex-two-point-ordered-configurations-of-the-plane]]). Let $S_2$ act on $F_2(\mathbb C)$ by coordinate permutation ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]), let $\tau\in S_2$ be the nonidentity permutation ([[def-finite-symmetric-group-and-permutation-notation]]), let $p:F_2(\mathbb C)\to C_2(\mathbb C)$ be the quotient map onto the unordered configuration space with $[q]=p(q)$ ([[def-unordered-configuration-space]]), and put
$$Q:=\bigl\{\{w,-w\}:w\in\mathbb C^\times\bigr\},\qquad \rho:\mathbb C^\times\to Q,\quad \rho(w):=\{w,-w\},$$
with $Q$ carrying the quotient topology of the surjection $\rho$ and the notation $Q=\mathbb C^\times/\{\pm1\}$ ([[def-quotient-topology]]). Then:

1. **The transposition in centre and difference coordinates.** Writing $c,w$ for the two components of $\Phi$, one has $\Phi(\tau\cdot x)=(c(x),-w(x))$ for every $x\in F_2(\mathbb C)$: the coordinate permutation swaps the two points, leaves the centre fixed and replaces the difference by its negative.
2. **The unordered space of two points.** The map $$\bar\Phi:C_2(\mathbb C)\longrightarrow\mathbb C\times Q,\qquad \bar\Phi([x]):=\bigl(c(x),\rho(w(x))\bigr),$$ is a well-defined continuous bijection whose inverse $$\bar\Psi:\mathbb C\times Q\longrightarrow C_2(\mathbb C),\qquad \bar\Psi\bigl(c,\rho(w)\bigr):=\bigl[\Psi(c,w)\bigr],$$ is also continuous; hence $C_2(\mathbb C)\cong\mathbb C\times(\mathbb C^\times/\{\pm1\})$ ([[def-homeomorphism-and-open-maps]]).
3. **Nontrivial endpoint monodromy of the half turn.** On the unit interval $I=[0,1]$ ([[def-interval]]) let $\gamma:I\to\mathbb C^\times$ be the polygonal half turn $$\gamma(t):=\begin{cases}(1-2t)+2t\,i, & 0\le t\le\frac12,\\[1pt] -(2t-1)+(2-2t)i, & \frac12\le t\le 1,\end{cases}$$ which runs from $1$ through the quarter turn $i$ to $-1$ and never vanishes, and let $$\alpha:I\longrightarrow C_2(\mathbb C),\qquad \alpha(t):=\bar\Psi\bigl(c_0,\rho(w_0\,\gamma(t))\bigr)=\bigl[\Psi\bigl(c_0,\,w_0\,\gamma(t)\bigr)\bigr],$$ which is a based loop at $[q]$ because $\rho(w_0)=\rho(-w_0)$. Then $t\mapsto\Psi(c_0,w_0\gamma(t))$ is the unique lift of $\alpha$ through $p$ starting at $q$, and its endpoint is $\Psi(c_0,-w_0)=\tau\cdot q$; equivalently the monodromy element $q\cdot[\alpha]$ of the covering is $\tau\cdot q$ and the unique permutation $\sigma_\alpha\in S_2$ defined here by $q\cdot[\alpha]=\sigma_\alpha\cdot q$ is the transposition $\tau$. So the half turn of the difference coordinate has nontrivial endpoint monodromy, and in particular the covering $p:F_2(\mathbb C)\to C_2(\mathbb C)$ is not trivial.

## Facts & Assumptions

**Given:** A base configuration $q\in F_2(\mathbb C)$ with coordinates $(c_0,w_0)=\Phi(q)$, the transposition $\tau\in S_2$, the quotient map $p:F_2(\mathbb C)\to C_2(\mathbb C)$, the set $Q=\{\{w,-w\}:w\in\mathbb C^\times\}$ with the quotient topology of $\rho(w)=\{w,-w\}$, and the maps $\Phi,\Psi$ of [[ex-two-point-ordered-configurations-of-the-plane]].

[F1] $\Phi:F_2(\mathbb C)\to\mathbb C\times\mathbb C^\times$, $\Phi(z_1,z_2)=((z_1+z_2)/2,\,z_2-z_1)$ is a homeomorphism with inverse $\Psi(c,w)=(c-\frac w2,\,c+\frac w2)$; its components $x\mapsto c(x)$ and $x\mapsto w(x)$ are continuous, and $w(x)\neq0$ for every $x\in F_2(\mathbb C)$ ([[ex-two-point-ordered-configurations-of-the-plane]]).

[F2] The formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous free left action of $S_2$ on $F_2(\mathbb C)$, and $S_2=\{\operatorname{id},\tau\}$ with $\tau(0)=1$, $\tau(1)=0$ and $\tau^{-1}=\tau$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-finite-symmetric-group-and-permutation-notation]]).

[F3] $C_2(\mathbb C)=F_2(\mathbb C)/S_2=\{S_2\cdot x:x\in F_2(\mathbb C)\}$ is the set of orbits with the quotient topology of the canonical projection $p$, $p(x)=S_2\cdot x=[x]$; $p$ is a quotient map, hence continuous and surjective, its fibres are the orbits, the fibre over $[q]$ is exactly $\{\operatorname{id}\cdot q,\tau\cdot q\}$, and the basepoint is $[q]$ ([[def-unordered-configuration-space]], [[def-quotient-topology]], [[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).

[F4] Quotient topology: for a surjection $\rho:\mathbb C^\times\to Q$, a subset $V\subseteq Q$ is open exactly when $\rho^{-1}(V)$ is open in $\mathbb C^\times$; a subset $A\subseteq\mathbb C^\times$ is saturated when $A=\rho^{-1}[\rho[A]]$, and then $\rho[A]$ is open as soon as $A$ is; a map $k$ out of $Q$ into a space is continuous if and only if $k\circ\rho$ is continuous ([[def-quotient-topology]], [[thm-initial-and-final-characteristic-properties]]).

[F5] $\mathbb C$ is a field, addition and multiplication of complex numbers are continuous maps $\mathbb C\times\mathbb C\to\mathbb C$, and for fixed $\lambda\in\mathbb C$ the map $z\mapsto\lambda z$ is continuous; consequently sums and products of continuous complex-valued maps are continuous ([[thm-complex-numbers-form-a-field]], [[lem-vector-operations-are-continuous-in-a-normed-space]], [[lem-complex-conjugation-and-modulus-laws]], [[def-complex-metric-convergence-and-continuity]], [[def-complex-numbers-and-arithmetic]]).

[F6] The modulus satisfies $|z|\ge0$, $|z|=0\Leftrightarrow z=0$, $|zw|=|z|\,|w|$ and $|z+w|\le|z|+|w|$, and for $u=a+bi$ with real $a,b$ one has $u\overline u=a^2+b^2$; the real numbers $2$, $-1$, $\frac12$ are complex numbers by the embedding, $2\cdot\frac12=1$, and a sum of two squares of real numbers vanishes only when both vanish ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-complex-numbers-form-a-field]]).

[F7] Continuity criteria and assembly: a map into a product is continuous if and only if its components are; a map is continuous as soon as its restrictions to the two closed halves of a finite closed cover are; restrictions of continuous maps to subspaces are continuous, and for a subset $S\subseteq\mathbb C$ the inclusion $S\hookrightarrow\mathbb C$ of the subspace is the restriction of the identity and hence continuous; boxes of open sets form a basis of the product topology, and balls form a basis of the topology of $\mathbb C$, so a map is continuous when preimages of the members of a basis of its target are open ([[thm-product-universal-property]], [[lem-continuity-is-local-and-pastes]], [[def-subspace-topology-top]], [[def-product-topology]], [[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-metric-ball]], [[def-metric-topology]]).

[F8] $\mathbb C$ is a metric space with $d_{\mathbb C}(z,w)=|z-w|$, hence a Hausdorff space ([[def-complex-metric-convergence-and-continuity]], [[thm-metric-hausdorff-separation]]); for the Hausdorff space $X=\mathbb C$ and $n=2$, [[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]] gives that the quotient map $p$ is evenly covered at every point of $C_2(\mathbb C)$ with $2!=2$ sheets, and since $p$ is a continuous surjection, $p$ is a covering map ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F9] For a covering and a path in the base, every point of the fibre over its initial point is the starting point of exactly one lift; the endpoint of the unique lift of a based loop beginning at a point $e$ of the fibre defines the monodromy element $e\cdot[\alpha]$ ([[thm-path-lifting-for-covering-maps]], [[def-monodromy-action-on-a-covering-fibre]]).



## Verification

**Proof technique:** direct.

1.1 *The transposition acts by $(c,w)\mapsto(c,-w)$.* Let $x=(x_1,x_2)\in F_2(\mathbb C)$. By [F2] one has $(\tau\cdot x)_1=x_{\tau^{-1}(0)+1}=x_2$ and $(\tau\cdot x)_2=x_{\tau^{-1}(1)+1}=x_1$, so $\tau\cdot x=(x_2,x_1)$. Hence $$c(\tau\cdot x)=\frac{x_2+x_1}{2}=\frac{x_1+x_2}{2}=c(x),\qquad w(\tau\cdot x)=x_1-x_2=-(x_2-x_1)=-w(x),$$ using the field laws of [F5]. This is claim 1. [F1, F2, F5]

1.2 *$\bar\Phi$ is continuous.* The composite $\bar\Phi\circ p:F_2(\mathbb C)\to\mathbb C\times Q$ has components $p_1(x)=c(x)$ and $p_2(x)=\rho(w(x))$: the first is continuous by [F1], and the second is the composite of the continuous $w$ of [F1] with the quotient map $\rho$, which is continuous by [F4]. Hence $\bar\Phi\circ p$ is continuous by the product criterion [F7], and therefore $\bar\Phi$ is continuous by the characteristic property of the quotient map $p$ [F3] (equivalently, [F4] applied to the final topology of $p$). [F1, F3, F4, F7]

1.3 *The half turn $\gamma$ is a continuous path in $\mathbb C^\times$ from $1$ to $-1$.* On the closed interval $[0,\frac12]$ the map $\gamma(t)=(1-2t)+2t\,i$ is built from the continuous inclusion $t\mapsto t$ of $[0,\frac12]$ into $\mathbb C$ (the restriction of the identity, [F7]) by the continuous operations of multiplication by the constants $\mp2$ and $i$ and of addition, so it is continuous by [F5] and [F7]; the same holds on $[\frac12,1]$ for $\gamma(t)=-(2t-1)+(2-2t)i$. At $t=\frac12$ both formulas give $i$, and $[0,\frac12]\cup[\frac12,1]=I$ is a finite closed cover, so $\gamma$ is continuous by [F7]. For $0\le t\le\frac12$ one has $\gamma(t)=u(t)$ with $u(t)=(1-2t)+2t\,i$, whose real and imaginary parts are $1-2t$ and $2t$, so $u(t)\overline{u(t)}=(1-2t)^2+(2t)^2$ by [F6]; this is a sum of two squares of real numbers vanishing only if $1-2t=0$ and $2t=0$ simultaneously, which is impossible, so $\gamma(t)\neq0$. For $\frac12\le t\le1$ the same computation with the real and imaginary parts $-(2t-1)$ and $2-2t$ gives $|\gamma(t)|^2=(2t-1)^2+(2-2t)^2\neq0$. Finally $\gamma(0)=1$ and $\gamma(1)=-1$. [F5, F6, F7]

2.1 *$\bar\Phi$ and $\bar\Psi$ are well defined and mutually inverse.* If $x$ and $\tau\cdot x$ are representatives of the same orbit, then by step 1.1 their coordinates are $(c(x),w(x))$ and $(c(x),-w(x))$, and $\rho(-w(x))=\{w(x),-w(x)\}=\rho(w(x))$; since $p$ is the orbit map [F3], $\bar\Phi$ is well defined. Likewise, if $w'=\pm w$ then by step 1.1 and [F1] $\Psi(c,-w)=\tau\cdot\Psi(c,w)$, so $\Psi(c,w)$ and $\Psi(c,w')$ lie in the same orbit and $\bar\Psi$ is well defined. Moreover $\bar\Psi(\bar\Phi([x]))=[\Psi(c(x),w(x))]=[x]$ and $\bar\Phi(\bar\Psi(c,\rho(w)))=\bar\Phi([\Psi(c,w)])=(c,\rho(w))$ by [F1] and the definition of $\bar\Phi$. So $\bar\Phi$ is a bijection with inverse $\bar\Psi$. [step 1.1, F1, F3, F4]

3.1 *$\bar\Psi$ is continuous.* The quotient map $\rho$ is open: for an open $O\subseteq\mathbb C^\times$, its saturation $\rho^{-1}(\rho(O))=O\cup(-O)$ is open, since multiplication by $-1$ is a homeomorphism by [F5]; hence $\rho(O)$ is open by [F4]. It follows that $Q_0:=\operatorname{id}_{\mathbb C}\times\rho:\mathbb C\times\mathbb C^\times\to\mathbb C\times Q$ is an open continuous surjection: on each basic open box it has the open image $U\times\rho(O)$, and every open set is a union of such boxes by [F7]. An open continuous surjection is a quotient map. The continuous map $p\circ\Psi:\mathbb C\times\mathbb C^\times\to C_2(\mathbb C)$ is constant on the fibres of $Q_0$ by step 2.1. Therefore it factors continuously through $Q_0$ by the quotient characteristic property [F4], and its factor is exactly $\bar\Psi$. [step 2.1, F1, F3, F4, F5, F7]

4.1 *Claim 2.* Steps 1.2, 2.1 and 3.1 exhibit $\bar\Phi$ as a continuous bijection with continuous inverse $\bar\Psi$, that is, a homeomorphism; hence $C_2(\mathbb C)\cong\mathbb C\times(\mathbb C^\times/\{\pm1\})$. [step 2.1, step 1.2, step 3.1]

4.2 *$\alpha$ is a based loop at $[q]$ and $\widetilde\alpha$ is a lift.* The map $t\mapsto w_0\gamma(t)$ is continuous as a product of continuous complex-valued maps [F5, F7] and takes values in $\mathbb C^\times$: $|w_0\gamma(t)|=|w_0|\,|\gamma(t)|\neq0$ by [F6] and step 1.3. Hence $t\mapsto(c_0,\rho(w_0\gamma(t)))$ is continuous into $\mathbb C\times Q$ by the product criterion [F7], and composing with the continuous $\bar\Psi$ of step 3.1 gives that $\alpha$ is continuous. Since $\rho(w_0)=\{w_0,-w_0\}=\rho(-w_0)$, one has $\alpha(0)=\bar\Psi(c_0,\rho(w_0))=\bar\Psi(c_0,\rho(-w_0))=\alpha(1)$, and $\alpha(0)=\bar\Phi^{-1}((c_0,\rho(w_0)))=[q]$ because $\bar\Phi([q])=(c_0,\rho(w_0))$ by [F1] and step 2.1. So $\alpha$ is a based loop at $[q]$. The path $\widetilde\alpha(t):=\Psi(c_0,w_0\gamma(t))$ is continuous into $F_2(\mathbb C)$ by [F1], starts at $\Psi(c_0,w_0)=q$, and satisfies $p\circ\widetilde\alpha=\alpha$ because $p(\Psi(c,w))=\bar\Psi(c,\rho(w))$ for all $w\in\mathbb C^\times$ by the definition of $\bar\Psi$ in step 2.1. [step 2.1, step 3.1, step 1.3, F1, F5, F6, F7]

5.1 *The endpoint of the lift is $\tau\cdot q$, so the monodromy is nontrivial.* By [F8] $p$ is a covering map, so [F9] gives a unique lift of the path $\alpha$ starting at $q$; by step 4.2 the path $\widetilde\alpha$ is such a lift, hence it is that unique lift. Its endpoint is $\widetilde\alpha(1)=\Psi(c_0,w_0\gamma(1))=\Psi(c_0,-w_0)$ by step 1.3, and by [F1] $$\Psi(c_0,-w_0)=\Bigl(c_0+\frac{w_0}{2},\,c_0-\frac{w_0}{2}\Bigr),\qquad q=\Psi(c_0,w_0)=\Bigl(c_0-\frac{w_0}{2},\,c_0+\frac{w_0}{2}\Bigr),$$ so $\widetilde\alpha(1)=(q_2,q_1)=\tau\cdot q$ by step 1.1; equivalently $q\cdot[\alpha]=\tau\cdot q$ in the sense of [F9], and the permutation $\sigma_\alpha$ with $\widetilde\alpha(1)=\sigma_\alpha\cdot q$ is $\tau$. Since the action is free and $\tau\neq\operatorname{id}$, one has $\tau\cdot q\neq q$ by [F2], so the monodromy is nontrivial: the half turn of the difference coordinate does not lift to a loop in $F_2(\mathbb C)$. The deck transformation $\tau$ carries the lift starting at $q$ to the lift starting at $\tau\cdot q$ and carries its endpoint $\tau\cdot q$ to $q$. Thus the monodromy transposes both points of the fibre and fixes neither. A trivial two-sheeted covering has identity monodromy around every loop, so this covering is not trivial. [step 1.1, step 1.3, step 4.2, F1, F2, F8, F9]

6.1 *Conclusion.* Claim 1 is step 1.1, claim 2 is step 4.1, and claim 3 is steps 1.3, 4.2 and 5.1: the transposition acts on centre and difference coordinates by $(c,w)\mapsto(c,-w)$, the unordered space of two points is homeomorphic to $\mathbb C\times(\mathbb C^\times/\{\pm1\})$ through $\bar\Phi$, and the half turn of the difference coordinate is a based loop at $[q]$ with nontrivial endpoint monodromy $\tau$. No choice principle was used. [step 1.1, step 4.1, step 5.1] ∎
