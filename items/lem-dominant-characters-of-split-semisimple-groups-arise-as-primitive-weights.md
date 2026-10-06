---
id: lem-dominant-characters-of-split-semisimple-groups-arise-as-primitive-weights
kind: lemma
title: "Every dominant weight of a split semisimple group is a primitive weight"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 33
deps: [cor-morphisms-equal-on-dense-open-reduced-source, def-abstract-root-datum-and-its-weyl-group, def-axiom-of-choice, def-borel-subgroup-and-maximal-torus, def-contragredient-rational-representation, def-induced-coordinate-module-e-lambda, def-primitive-vector-of-a-rational-representation, def-rational-representation-and-comodule-of-an-affine-group-scheme, def-root-datum-of-a-split-reductive-group, def-smooth-morphism-schemes, def-split-reductive-algebraic-group, def-weight-and-dominant-weight-of-a-rational-representation, lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples, lem-normalizer-action-permutes-weight-spaces, lem-power-extension-over-a-normal-affine-domain, lem-root-datum-combinatorics, lem-tensor-products-of-primitive-vectors, prop-primitive-vectors-of-the-induced-coordinate-module, thm-bruhat-decomposition-for-split-reductive-group, thm-regular-local-rings-are-normal, thm-weyl-group-borel-chambers]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.23) and (22.26), printed pp. 470-471; Ch. 21 (21.7)-(21.9)"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, second proof of Theorem 39(e) (Lemma 74 and the proof following it)"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(G,T)$ be a
split semisimple group over $k$ and let $\lambda\in X(T)$ be dominant
([[def-weight-and-dominant-weight-of-a-rational-representation]]). Then there
exists a (possibly infinite-dimensional) rational representation of $G$
containing a primitive vector of weight $\lambda$; consequently
$E(\lambda)\ne0$ ([[def-induced-coordinate-module-e-lambda]]).

## Facts & Assumptions

**Given:** AC; a split semisimple group $(G,T)$ with Borel $B\supseteq T$,
opposite Borel $B^0=B^-$, unipotent radical $U=B_u$, root datum
$(X(T),\Phi,\alpha\mapsto\alpha^\vee)$ with base $\Delta$, and a dominant
$\lambda\in X(T)$.

[F1] *The induced coordinate module.* $E(\mu)\subseteq O(G)$ is the space of
regular functions with $f(gb)=f(g)\mu(b^{-1})$ for all $k$-algebras $R$,
$g\in G(R)$, $b\in B^0(R)$; it is a $G$-submodule of the regular
representation ([[def-induced-coordinate-module-e-lambda]]).

[F2] *Fixed vectors of $E(\mu)$.* If $E(\mu)\ne0$, then the fixed space
$E(\mu)^U$ is one-dimensional, evaluation $f\mapsto f(1)$ is an isomorphism
$E(\mu)^U\to k$, and every nonzero $f\in E(\mu)^U$ is a primitive vector of
weight $\mu$ satisfying $f(u)=f(1)$ for $u\in U(R)$ and
$f(ub)=f(1)\mu(b^{-1})$ for $b\in B^0(R)$; in particular
$E(\mu)\ne0$ if and only if $E(\mu)$ contains a primitive vector of weight
$\mu$ ([[prop-primitive-vectors-of-the-induced-coordinate-module]]).

[F3] *The big cell and determination on it.* $U\times B^0\to G$,
$(u,b)\mapsto ub$, is an open immersion onto a dense open subscheme of $G$;
$G$ is smooth and connected, hence reduced, so two morphisms from $G$ (or from
$G\times B^0$) to a separated scheme that agree on that dense open agree
everywhere ([[thm-bruhat-decomposition-for-split-reductive-group]],
[[cor-morphisms-equal-on-dense-open-reduced-source]],
[[def-smooth-morphism-schemes]]).

[F4] *The longest element and dominance.* The longest element $w_0$ of the
Weyl group satisfies $w_0(\Phi^+)=-\Phi^+$, $w_0^2=1$, and $w_0(\Delta)=-\Delta$;
the Weyl group acts on $X(T)$ preserving the pairing with coroots, so
$(-w_0\lambda)$ is dominant whenever $\lambda$ is
([[lem-root-datum-combinatorics]],
[[def-abstract-root-datum-and-its-weyl-group]],
[[thm-weyl-group-borel-chambers]]).

[F5] *Fundamental weights and the semisimple case.* For a semisimple root
datum, $X_0=\{x\in X(T):\langle x,\alpha^\vee\rangle=0\ \forall\alpha\}=0$, and
$\lambda=\sum_{i\in\Delta}\langle\lambda,\alpha_i^\vee\rangle\omega_i$ with
integer coefficients ([[lem-root-datum-combinatorics]],
[[def-weight-and-dominant-weight-of-a-rational-representation]]).

[F6] *Fundamental weights.* For every $i\in\Delta$ there exists $d_i>0$ with
$d_i\omega_i\in X(T)$ the weight of a primitive vector of a finite-dimensional
rational representation
([[lem-fundamental-weights-of-split-semisimple-groups-have-primitive-multiples]]).

[F7] *Tensor products.* If $v$ and $v'$ are primitive vectors of weights $\mu$
and $\mu'$, then $v\otimes v'$ is primitive of weight $\mu+\mu'$
([[lem-tensor-products-of-primitive-vectors]]).

[F8] *Power extension over a normal domain.* $G$ is a smooth connected affine
group, so its coordinate ring is a normal domain; if $f$ is a regular function
on a dense open subscheme of $G$ with $f^d\in O(G)$ for some $d>0$, then
$f\in O(G)$ ([[thm-regular-local-rings-are-normal]],
[[def-smooth-morphism-schemes]],
[[lem-power-extension-over-a-normal-affine-domain]]).

[F9] *Contragredient representation.* The dual $V^*$ of a finite-dimensional
rational representation $V$ is a rational representation, and matrix
coefficients of a finite-dimensional rational representation are regular
functions on $G$ ([[def-contragredient-rational-representation]],
[[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

## Proof

**Given:** AC; a split semisimple group $(G,T)$ with Borel $B\supseteq T$,
opposite Borel $B^0=B^-$, unipotent radical $U=B_u$, root datum
$(X(T),\Phi,\alpha\mapsto\alpha^\vee)$ with base $\Delta$, and a dominant
$\lambda\in X(T)$.

**Proof technique:** direct.

1.1 Observation (a): for $\mu\in X(T)$, one has $E(\mu)\ne0$ if and only if the morphism $f_\mu:U\cdot B^0\to\mathbb A^1$, $ub\mapsto\mu(b^{-1})$, extends to $G$. If $E(\mu)\ne0$, pick $0\ne f\in E(\mu)^U$; by [F2] $f(u)=f(1)$ and $f(ub)=f(1)\mu(b^{-1})$ on the big cell, so $f/f(1)\in O(G)$ extends $f_\mu$. Conversely, if $F\in O(G)$ extends $f_\mu$, then the morphisms $G\times B^0\to\mathbb A^1$, $(g,b)\mapsto F(gb)$ and $(g,b)\mapsto F(g)\mu(b^{-1})$, agree on the dense open $(U\cdot B^0)\times B^0$ (for $g=ub_1$ one has $F(gb)=f_\mu(ub_1b)=\mu(b^{-1})\mu(b_1^{-1})=\mu(b^{-1})F(g)$), hence by [F3] they agree on $G\times B^0$ and $F\in E(\mu)$, so $E(\mu)\ne0$. [F1, F2, F3]

1.2 Observation (b): if $\mu$ is the weight of a primitive vector of a finite-dimensional rational representation, then $E(-w_0\mu)\ne0$. Let $v\in V$ be such a primitive vector and let $P\in G(k)$ represent $w_0$; choose $f\in V^*$ with $f(Pv)\ne0$ and put $F(g)=f(gPv)$, a regular function by [F9]. For $b\in B^0(R)$ one has $P^{-1}bP\in B(R)$, since $w_0$ carries the opposite Borel to $B$. The action of $B$ on the primitive line $kv$ is through the character extending $\mu$ from $T$ and trivial on $U$, so $(P^{-1}bP)v=(w_0\mu)(b)v$, with $(w_0\mu)(b)=\mu(P^{-1}bP)$ under this extension ([[lem-normalizer-action-permutes-weight-spaces]]). Therefore $F(gb)=f(gbPv)=f(gP(P^{-1}bP)v)=(w_0\mu)(b)F(g)=(-w_0\mu)(b^{-1})F(g)$. Hence $F\in E(-w_0\mu)$ and $F(1)=f(Pv)\ne0$, so $E(-w_0\mu)\ne0$. [F1, F9]

1.3 For the dominant character $\lambda$: $-w_0\lambda$ is dominant by [F4], and by [F5] $\lambda=\sum_{i\in\Delta}m_i\omega_i$ with $m_i=\langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z_{\ge0}$. If $\lambda=0$, a nonzero vector of the trivial representation is primitive of weight $0$. If $\lambda\ne0$, put $D=\prod_{i:m_i>0}d_i$, where $d_i$ is as in [F6]; then $D\lambda=\sum_{i:m_i>0}(Dm_i/d_i)(d_i\omega_i)$ is a nonnegative integral combination of primitive weights, so $D\lambda$ is again a primitive weight by [F7], being the weight of a tensor product of primitive vectors. [F4, F5, F6, F7]

2.1 By step 1.3 applied to the dominant character $-w_0\lambda$, there exists $e>0$ such that $e(-w_0\lambda)$ is a primitive weight. Observation (b) of step 1.2 with $\mu=e(-w_0\lambda)$ gives $E(-w_0\mu)=E(e\lambda)\ne0$, because $w_0^2=1$. [F4, step 1.2, step 1.3]

3.1 By observation (a) of step 1.1 applied to $e\lambda$, the function $f_{e\lambda}$ extends to $G$. On the big cell $f_{e\lambda}(ub)=(e\lambda)(b^{-1})=(f_\lambda(ub))^e$, so $(f_\lambda)^e\in O(G)$; since $G$ is a normal affine scheme and $U\cdot B^0$ is a dense open subscheme, [F8] gives $f_\lambda\in O(G)$. [F3, F8, step 1.1, step 1.3, step 2.1]

4.1 By observation (a) of step 1.1 applied to $\lambda$, the extension of $f_\lambda$ gives $E(\lambda)\ne0$; by [F2] $E(\lambda)$ contains a primitive vector of weight $\lambda$. Thus $E(\lambda)$, a rational representation of $G$, contains a primitive vector of weight $\lambda$, as required. [F2, step 1.1, step 3.1] ∎

## Remarks

- This is Milne's Lemma 22.26; the two observations (a) and (b) are exactly the two paragraphs of its proof, and the passage from $f_{d\lambda}$ to $f_\lambda$ is Lemma 22.23 (power extension over the normal domain $O(G)$).
- When $G$ is semisimple, $X_0=0$, so every dominant $\lambda$ is a nonnegative integral combination of fundamental weights; this is where semisimplicity is used, and it is the reason the reductive case needs the separate product decomposition $Z(G)_t\times G_{\mathrm{der}}$ and the central isogeny.
