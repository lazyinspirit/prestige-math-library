---
id: thm-nrqm-identical-particles-two-factor-symmetry-decomposition
aliases: [nrqm-identical-particles-two-factor-symmetry-decomposition]
kind: theorem
domain: mathematics
title: "Regrouping two factors: the symmetry decomposition of a two-particle sector over an orbital and an internal factor"
status: draft
origin: pipeline
dependency_level: 4
deps: [lem-nrqm-identical-particles-two-particle-exchange-operator, thm-nrqm-identical-particles-occupation-number-basis, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, cor-finite-iterated-tensor-products-represent-multilinear-maps, cor-tensor-products-of-finite-free-modules-and-dimension, cor-finite-dimensional-subspaces-are-closed, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-hilbert-orthogonal-projection, def-countable-choice]
dependency_roles:
  lem-nrqm-identical-particles-two-particle-exchange-operator: mathematical-premise
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  cor-finite-iterated-tensor-products-represent-multilinear-maps: mathematical-premise
  cor-tensor-products-of-finite-free-modules-and-dimension: mathematical-premise
  cor-finite-dimensional-subspaces-are-closed: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1.2 printed pages 229-230 (PDF pages 237-238): the spatial wavefunction of a pair of spin-half particles is symmetric for the spin singlet and antisymmetric for the spin triplet"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Skinner, Principles of Quantum Mechanics (Cambridge Part II, Michaelmas 2021), Chapter 7 'Identical Particles', pp. 4-10: splitting a two-particle state into spatial and spin parts under exchange symmetry; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
      url: "https://web.archive.org/web/20240801085112id_/https://www.damtp.cam.ac.uk/user/dbs26/PQM/chap7.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H,V$ be
nonzero finite-dimensional complex Hilbert spaces ([[def-hilbert-space]]),
$\dim H=m$, $\dim V=k$. All tensor products below are the completed tensor
products of [[lem-nrqm-composites-hilbert-tensor-construction]], with
elementary tensors $u\otimes v$, and all permutation projections
$P_\pm^{(2)}$ and exchange operators $\tau_W$ are those of
[[lem-nrqm-composites-permutation-sector-projections]] and
[[lem-nrqm-identical-particles-two-particle-exchange-operator]] for the
displayed Hilbert space $W$. Then:

(a) *identification*: the inclusion $\kappa:H\odot V\to H\widehat\otimes V$ of the algebraic tensor product is a surjective linear isometry, so elementary tensors and finite sums of them may be treated as elements of the completed product without ambiguity; the same holds for $(H\otimes V)\widehat\otimes(H\otimes V)$ and $(H\otimes H)\widehat\otimes(V\otimes V)$;

(b) *regrouping unitary*: there is a unique bounded linear operator $\Theta:(H\otimes V)\widehat\otimes(H\otimes V)\to(H\otimes H)\widehat\otimes(V\otimes V)$ with
$$\Theta\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=(u\otimes v)\otimes(\chi\otimes\chi')$$
for all $u,v\in H$, $\chi,\chi'\in V$; $\Theta$ is unitary and its inverse is the unique bounded operator with $\Theta^{-1}\bigl((u\otimes v)\otimes(\chi\otimes\chi')\bigr)=(u\otimes\chi)\otimes(v\otimes\chi')$;

(c) *exchange intertwining*: $\Theta\,\tau_{H\otimes V}=(\tau_H\otimes\tau_V)\,\Theta$, where $\tau_H\otimes\tau_V$ is the bounded tensor product of the two exchange operators;

(d) *symmetriser identities*: $\Theta P_-^{(H\otimes V)}=\bigl(P_-^{(H)}\otimes P_+^{(V)}+P_+^{(H)}\otimes P_-^{(V)}\bigr)\Theta$ and $\Theta P_+^{(H\otimes V)}=\bigl(P_+^{(H)}\otimes P_+^{(V)}+P_-^{(H)}\otimes P_-^{(V)}\bigr)\Theta$; consequently $\Theta$ maps $\operatorname{ran}P_-^{(H\otimes V)}$ onto the orthogonal direct sum $\bigl(\operatorname{ran}P_-^{(H)}\otimes\operatorname{ran}P_+^{(V)}\bigr)+\bigl(\operatorname{ran}P_+^{(H)}\otimes\operatorname{ran}P_-^{(V)}\bigr)$ and $\operatorname{ran}P_+^{(H\otimes V)}$ onto $\bigl(\operatorname{ran}P_+^{(H)}\otimes\operatorname{ran}P_+^{(V)}\bigr)+\bigl(\operatorname{ran}P_-^{(H)}\otimes\operatorname{ran}P_-^{(V)}\bigr)$;

(e) *vector identities*: for all $u,v\in H$ and $\chi,\chi'\in V$,
$$\Theta\Bigl(P_-^{(H\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)\Bigr)=P_+^{(H)}(u\otimes v)\otimes P_-^{(V)}(\chi\otimes\chi')+P_-^{(H)}(u\otimes v)\otimes P_+^{(V)}(\chi\otimes\chi'),$$
$$\Theta\Bigl(P_+^{(H\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)\Bigr)=P_+^{(H)}(u\otimes v)\otimes P_+^{(V)}(\chi\otimes\chi')+P_-^{(H)}(u\otimes v)\otimes P_-^{(V)}(\chi\otimes\chi');$$

(f) *dimensions*:
$$\dim\operatorname{ran}P_-^{(H\otimes V)}=\binom m2\binom{k+1}2+\binom{m+1}2\binom k2=\binom{mk}2,$$
with the two summands of (d) having dimensions $\binom m2\binom{k+1}2$ and $\binom{m+1}2\binom k2$.

## Facts & Assumptions

**Given:** The finite-dimensional nonzero complex Hilbert spaces $H,V$ of dimensions $m,k$, their completed tensor products, the elementary tensors and the permutation projections and exchange operators of the cited items.

[F1] **Tensor construction.** For complex Hilbert spaces $X,Y$ the inclusion $\kappa:X\odot Y\to X\widehat\otimes Y$ is a linear isometry with dense image; $\kappa(u\otimes v)$ is bilinear, $\|\kappa(u\otimes v)\|=\|u\|\,\|v\|$ and $\langle\kappa(u\otimes v),\kappa(u'\otimes v')\rangle=\langle u,u'\rangle\langle v,v'\rangle$; every element of $X\odot Y$ is a finite sum of elementary tensors, and if $(e_a)$ and $(f_b)$ are orthonormal bases of $X$ and $Y$ then $(\kappa(e_a\otimes f_b))$ is an orthonormal basis of $X\widehat\otimes Y$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a)-(d)).

[F2] **Multilinear factorisation.** For a finite list of modules $M_1,\dots,M_k$ over a commutative ring, every parenthesised tensor product represents multilinear maps from $M_1\times\cdots\times M_k$, and different parenthesizations are connected by the unique isomorphism preserving pure tensors ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F3] **Finite-dimensional subspaces are closed.** A subspace of a normed space that admits a finite basis is closed ([[cor-finite-dimensional-subspaces-are-closed]]).

[F4] **Exchange operators and projections.** For a Hilbert space $W$, the exchange operator $\tau_W:=U_{(0\,1)}$ satisfies $\tau_W^2=I$ and $\tau_W^{*}=\tau_W$ and $\tau_W(w\otimes w')=w'\otimes w$, and $P_\pm^{(W)}=\frac12(I\pm\tau_W)$ are the orthogonal projections with the corresponding ranges ([[lem-nrqm-identical-particles-two-particle-exchange-operator]] clauses (a),(b), [[lem-nrqm-composites-permutation-sector-projections]] clauses (a),(c)).

[F5] **Bounded tensor maps.** For bounded operators $S,S'$ on $X$ and $T,T'$ on $Y$ there is a unique bounded $S\otimes T$ with $(S\otimes T)\kappa(u\otimes v)=\kappa'(Su\otimes Tv)$, $\|S\otimes T\|\le\|S\|\|T\|$, $(S\otimes T)(S'\otimes T')=(SS')\otimes(TT')$, $(S\otimes T)^{*}=S^{*}\otimes T^{*}$, and unitarity of $S,T$ gives unitarity of $S\otimes T$ ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a)-(d), [[def-bounded-linear-operator]], [[def-operator-norm]]).

[F6] **Dimensions.** For finite-dimensional vector spaces $X,Y$ over a field one has $\dim(X\otimes Y)=\dim X\cdot\dim Y$ ([[cor-tensor-products-of-finite-free-modules-and-dimension]]); and $\dim\operatorname{ran}P_-^{(n)}=\binom dn$, $\dim\operatorname{ran}P_+^{(n)}=\binom{n+d-1}n$ for a $d$-dimensional space ([[thm-nrqm-identical-particles-occupation-number-basis]] clauses (b),(c)).

[F7] **Orthogonal projections.** If $P,Q$ are orthogonal projections with $PQ=QP=0$, then $P+Q$ is an orthogonal projection with $\operatorname{ran}(P+Q)=\operatorname{ran}P+\operatorname{ran}Q$ a direct sum of orthogonal subspaces; a product $P\otimes Q$ of orthogonal projections is an orthogonal projection ([[def-hilbert-orthogonal-projection]], [[lem-nrqm-composites-permutation-sector-projections]] clause (b)).

## Proof

**Proof technique:** direct; identify the finite-dimensional algebraic and completed tensor products, build the regrouping map from the multilinear factorisation of the four-variable assignment, verify inversion and isometry on elementary tensors, transfer the exchange and symmetriser identities from elementary tensors by linearity, and read the decompositions and dimensions off the resulting projection identities.

**Given:** The data of the statement and [F1]-[F7].

1.1 [Identification] By [F1] the inclusion $\kappa:H\odot V\to H\widehat\otimes V$ is a linear isometry with dense image; if $(e_1,\dots,e_m)$ and $(f_1,\dots,f_k)$ are orthonormal bases of $H$ and $V$, then the $mk$ elements $e_a\otimes f_b$ span the algebraic tensor product by bilinearity, so $\kappa[H\odot V]$ is a finite-dimensional subspace of the Hilbert space $H\widehat\otimes V$, hence closed by [F3], and a dense closed subspace is the whole space; thus $\kappa$ is onto and identifies the two spaces, and the same argument applies to the algebraic and completed tensor products of $H\otimes V$ with itself and of $H\otimes H$ with $V\otimes V$, whose algebraic parts are spanned by finitely many elementary tensors. This proves (a). [F1, F3, algebra]

2.1 [The regrouping map and its inverse] Define $\Phi(u,v,\chi,\chi'):=(u\otimes v)\otimes(\chi\otimes\chi')$ for $u,v\in H$, $\chi,\chi'\in V$; it is multilinear in its four arguments, so by [F2] it corresponds to a unique linear map on the four-fold algebraic tensor product and, by the parenthesization independence of [F2] together with the identification of step 1.1, to a unique linear map $\Theta$ on $(H\otimes V)\widehat\otimes(H\otimes V)$ with the displayed values on elementary tensors; uniqueness holds because those elementary tensors span the space. Likewise $\Psi\bigl((u\otimes v)\otimes(\chi\otimes\chi')\bigr):=(u\otimes\chi)\otimes(v\otimes\chi')$ is multilinear and defines a linear map $\Psi$ on $(H\otimes H)\widehat\otimes(V\otimes V)$. On elementary tensors $\Psi\Theta=\mathrm{id}$ and $\Theta\Psi=\mathrm{id}$, and two linear maps agreeing on a spanning set agree everywhere; hence $\Theta$ is a linear isomorphism with inverse $\Psi$, which is the existence and inverse statement of (b). [F1, F2, step 1.1, algebra, construct]

3.1 [Unitarity] For elementary tensors $x=(u\otimes\chi)\otimes(v\otimes\chi')$ and $y=(u'\otimes\chi'')\otimes(v'\otimes\chi''')$ in the domain the inner-product identities of [F1] give $\langle\Theta x,\Theta y\rangle=\langle u\otimes v,u'\otimes v'\rangle\langle\chi\otimes\chi',\chi''\otimes\chi'''\rangle=\langle u,u'\rangle\langle v,v'\rangle\langle\chi,\chi''\rangle\langle\chi',\chi'''\rangle=\langle x,y\rangle$; the difference of the two sesquilinear forms vanishes on all pairs of elementary tensors, and since every vector is a finite sum of elementary tensors by [F1] it vanishes identically, so $\Theta$ is an isometry; being invertible by step 2.1 it is unitary, which completes (b). [F1, step 2.1, algebra]

3.2 [Intertwining with the exchange operators] For $u,v\in H$, $\chi,\chi'\in V$ one computes with [F4] and [F5] that $\Theta\tau_{H\otimes V}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=\Theta\bigl((v\otimes\chi')\otimes(u\otimes\chi)\bigr)=(v\otimes u)\otimes(\chi'\otimes\chi)$ and $(\tau_H\otimes\tau_V)\Theta\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=(\tau_H\otimes\tau_V)\bigl((u\otimes v)\otimes(\chi\otimes\chi')\bigr)=(v\otimes u)\otimes(\chi'\otimes\chi)$; both sides are bounded linear maps agreeing on the spanning set of elementary tensors, so they agree everywhere, which is (c). [F4, F5, step 2.1, algebra]

4.1 [Symmetriser identities] By [F4], $P_\pm^{(H\otimes V)}=\frac12(I\pm\tau_{H\otimes V})$, $P_\pm^{(H)}=\frac12(I\pm\tau_H)$ and $P_\pm^{(V)}=\frac12(I\pm\tau_V)$; using step 3.2 to move $\Theta$ past $\tau_{H\otimes V}$ and the linearity and multiplicativity of the tensor product of operators [F5], one obtains on the whole space $\Theta P_-^{(H\otimes V)}=\frac12\Theta-\frac12(\tau_H\otimes\tau_V)\Theta=\bigl(\frac12-\frac12\tau_H\otimes\tau_V\bigr)\Theta=\bigl(P_-^{(H)}\otimes P_+^{(V)}+P_+^{(H)}\otimes P_-^{(V)}\bigr)\Theta$, because $\frac12(I-\tau_H\otimes\tau_V)=\frac12(I-\tau_H)\otimes\frac12(I+\tau_V)+\frac12(I+\tau_H)\otimes\frac12(I-\tau_V)$ and its sign-reversed analogue are identities of bounded operators; this proves the first assertion of (d), and the computation with both signs reversed gives the second. [F4, F5, step 3.2, algebra]

5.1 [Direct-sum decompositions] By [F7] the operators $P_-^{(H)}\otimes P_+^{(V)}$ and $P_+^{(H)}\otimes P_-^{(V)}$ are orthogonal projections whose product is $(P_-^{(H)}P_+^{(H)})\otimes(P_+^{(V)}P_-^{(V)})=0$, so their sum is an orthogonal projection with range the orthogonal direct sum of the two ranges; by step 4.1 and the unitarity of step 3.1, the image of $\operatorname{ran}P_-^{(H\otimes V)}$ under $\Theta$ is that direct sum, and the same argument with the second identity of step 4.1 gives the symmetric-sector decomposition, completing (d). [F7, step 3.1, step 4.1, algebra]

5.2 [Vector identities] Applying the first identity of step 4.1 to the elementary tensor $(u\otimes\chi)\otimes(v\otimes\chi')$ and using the linearity of $\Theta$ and of tensor products of operators gives $\Theta P_-^{(H\otimes V)}\bigl((u\otimes\chi)\otimes(v\otimes\chi')\bigr)=\bigl(P_-^{(H)}\otimes P_+^{(V)}+P_+^{(H)}\otimes P_-^{(V)}\bigr)\bigl((u\otimes v)\otimes(\chi\otimes\chi')\bigr)=P_+^{(H)}(u\otimes v)\otimes P_-^{(V)}(\chi\otimes\chi')+P_-^{(H)}(u\otimes v)\otimes P_+^{(V)}(\chi\otimes\chi')$, which is the first identity of (e); the second follows in the same way from the second identity of step 4.1. [step 4.1, algebra]

6.1 [Dimensions] By step 5.1 and the unitarity of step 3.1, $\dim\operatorname{ran}P_-^{(H\otimes V)}=\dim(\operatorname{ran}P_-^{(H)}\otimes\operatorname{ran}P_+^{(V)})+\dim(\operatorname{ran}P_+^{(H)}\otimes\operatorname{ran}P_-^{(V)})$; by [F6] applied to the $m$- and $k$-dimensional spaces this is $\binom m2\binom{k+1}2+\binom{m+1}2\binom k2$, which are the displayed summand dimensions, and expanding the two products gives $\frac{m(m-1)k(k+1)+m(m+1)k(k-1)}4=\frac{mk(mk-1)}2=\binom{mk}2$, which is (f). [F6, step 3.1, step 5.1, algebra]

7.1 [Assembly] Step 1.1 proves (a), steps 2.1 and 3.1 prove (b), step 3.2 proves (c), steps 4.1 and 5.1 prove (d), step 5.2 proves (e) and step 6.1 proves (f). Only the cited linear algebra, tensor products and permutation projections were used, under the Countable Choice hypotheses of [F1], [F2] and [F5]; no physical reading of the factors is asserted. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 5.2, step 6.1] ∎

## Remarks

- **Reading of the decomposition.** With $H$ an orbital factor and $V$ an internal (spin) factor, the first summand of the antisymmetric sector pairs antisymmetric orbital two-vectors with symmetric internal two-vectors and the second pairs symmetric orbital two-vectors with antisymmetric internal two-vectors, so the internal permutation symmetry is opposite to the orbital one. The physical use of this identity for two spin-half fermions is developed on the identical-particles examples page.
- **Finite dimension.** Both factors are finite dimensional, so the algebraic and completed tensor products are identified in (a); no infinite-dimensional regrouping is asserted, and the identities themselves are transferred from elementary tensors by linearity.
