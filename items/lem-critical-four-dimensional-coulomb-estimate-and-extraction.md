---
id: lem-critical-four-dimensional-coulomb-estimate-and-extraction
kind: lemma
title: "Critical four-dimensional estimate and extraction in a given Coulomb gauge"
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n
  - lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n
  - thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-hilbert-spaces-are-reflexive-by-riesz-representation
  - cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - thm-ultrafilter-lemma
  - thm-hahn-banach-dominated-extension
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Katrin Wehrheim, Uhlenbeck Compactness, publicly available introduction, Theorems B and D and the local-gauge outline"
      url: "https://math.berkeley.edu/~katrin/papers/justintro.pdf"
    - title: "John K. Hunter, Notes on Partial Differential Equations, §§1.12, 3.7, 3.10–3.11"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---

## Statement

Assume full AC. Equip $\mathfrak{su}(2)$ with the real Frobenius inner product and forms on the Euclidean ball $B_r=B_r(0)\subset\mathbb R^4$, $r>0$, with the induced norms. Write $a=\sum_{i=1}^4a_i\,dx_i$, $d^*a=-\sum_i\partial_i a_i$, and $F_a=da+a\wedge a$, where $(a\wedge a)_{ij}=[a_i,a_j]$ for $i<j$. There exist constants $\varepsilon>0$ and $C<\infty$, independent of $r$, such that every smooth $a$ on $\overline B_r$ satisfying
$$d^*a=0,\qquad a(\nu)=0\text{ on }\partial B_r,\qquad \|a\|_{L^4(B_r)}\le\varepsilon$$
satisfies the scale-invariant estimate
$$\|\nabla a\|_{L^2(B_r)}+r^{-1}\|a\|_{L^2(B_r)}+\|a\|_{L^4(B_r)}\le C\|F_a\|_{L^2(B_r)}.$$

For fixed $r$, every sequence $a_j$ satisfying these three conditions and $\sup_j\|F_{a_j}\|_2\le M<\infty$ has a subsequence and a limit $a\in W^{1,2}(B_r;\mathfrak{su}(2)\otimes\mathbb R^4)$ with $a_j\rightharpoonup a$ in $W^{1,2}$, $a_j\to a$ in every $L^p$, $1\le p<4$, and $F_{a_j}\rightharpoonup F_a$ in $L^2$. The limit satisfies $\|a\|_4\le\varepsilon$ and the weak Coulomb and zero-normal condition
$$\int_{B_r}\langle a,d\phi\rangle=0\qquad\bigl(\phi\in C^\infty(\overline B_r;\mathfrak{su}(2))\bigr).$$
If $F_{a_j}^+=0$ for every $j$, then $F_a^+=0$ distributionally. If a fixed finite group $\Gamma\le O(4)$ and an orthogonal Lie-algebra representation $\sigma:\Gamma\to\operatorname{Aut}(\mathfrak{su}(2))$ satisfy $\gamma^*a_j=\sigma(\gamma)a_j$ for every $j$ and $\gamma\in\Gamma$, then the limit satisfies the same equations.

The hypotheses include the given gauges and their small potential norms. Existence of such gauges from a small curvature norm alone is a separate assertion.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n|Sobolev embedding on extension domains]]

[[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n|Mean-zero Poincare estimate]]

[[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain|Rellich extraction on extension domains]]

[Wehrheim, *Uhlenbeck Compactness*, public introduction](https://math.berkeley.edu/~katrin/papers/justintro.pdf)

## Facts & Assumptions

[F1] Under AC, the bounded smooth ball is an extension domain, $W^{1,2}(B_1)\hookrightarrow L^4(B_1)$ continuously, and every scalar mean-zero $u\in W^{1,2}(B_1)$ satisfies $\|u\|_2\le C_P\|Du\|_2$. Apply the scalar inequalities to finitely many real coefficients and enlarge constants to obtain the corresponding finite-dimensional vector inequalities. These are the exact cases $n=4,p=2$ of [[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]] and [[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n]].

[F2] The divergence theorem applies to smooth real vector fields on the closed ball, with the outward unit normal ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F3] Under AC, bounded sequences in $W^{1,2}(B_r)$ have $L^2$-convergent subsequences. Finite successive applications give the same conclusion for finitely many coefficients ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]]).

[F4] Real $L^2$ is Hilbert, Hilbert spaces are reflexive, and bounded sequences in reflexive Banach spaces have weakly convergent subsequences under the ultrafilter lemma, DC and HB ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-hilbert-spaces-are-reflexive-by-riesz-representation]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]). The present full AC supplies all those choice principles, using [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-ultrafilter-lemma]] and [[thm-hahn-banach-dominated-extension]].

[F5] Holder's inequality gives product bounds, interpolation between $L^2$ and $L^4$, and $\|u\|_p\le |B_r|^{1/p-1/2}\|u\|_2$ for $1\le p<2$ ([[thm-holder-inequality-for-integrals]]). Smooth compactly supported test functions are dense in $L^2(B_r)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]).

## Proof

**Given:** Full AC, the Euclidean ball, norms and smooth forms specified in the statement.

1.1 **The boundary identity.** First let $v$ be a real smooth vector field on $\overline B_r$ with $v\cdot\nu=0$, interpreted also as a one-form. Put $V_i=v_i\sum_j\partial_jv_j-\sum_jv_j\partial_jv_i$. Expanding derivatives and cancelling mixed second derivatives gives $\operatorname{div}V=(\operatorname{div}v)^2-\sum_{i,j}(\partial_iv_j)(\partial_jv_i)$. Since $|dv|^2=\sum_{i,j}(\partial_iv_j)^2-\sum_{i,j}(\partial_iv_j)(\partial_jv_i)$, the difference $|dv|^2+|d^*v|^2-|\nabla v|^2$ equals $\operatorname{div}V$. On the sphere, $V\cdot\nu=-\langle\nabla_vv,\nu\rangle=\langle v,\nabla_v\nu\rangle=r^{-1}|v|^2$: differentiate $v\cdot\nu=0$ along the tangential vector $v$ and use $\nu(x)=x/r$ there. Integrating by [F2], and summing this scalar identity in an orthonormal real basis of $\mathfrak{su}(2)$, yields $\|da\|_2^2+\|d^*a\|_2^2=\|\nabla a\|_2^2+r^{-1}\int_{\partial B_r}|a|^2$ whenever $a(\nu)=0$. Thus a Coulomb form with this boundary condition satisfies $\|\nabla a\|_2\le\|da\|_2$. [F2, given, algebra]

1.2 **Eliminating the constant mode.** Work for now on $B_1$. For each real Lie-algebra component of $a$ and each $k$, the vector field $x_k a$ has divergence $a_k+x_k\operatorname{div}a=a_k$ and boundary flux $x_ka(\nu)=0$. By [F2], $\int_{B_1}a_k=0$. Consequently [F1] gives constants $P,S>0$, independent of $a$, such that $\|a\|_2\le P\|\nabla a\|_2$ and $\|a\|_4\le S\|\nabla a\|_2$: obtain the latter by applying the Sobolev estimate to $a$ and then the former inequality. Enlarge $P,S$ if necessary so both are positive. [F1, F2, given, algebra]

2.1 **The critical nonlinear absorption.** Frobenius matrix norms satisfy $|XY|\le|X||Y|$, hence $|[X,Y]|\le2|X||Y|$. With the stated two-form convention, $|a\wedge a|^2=\sum_{i<j}|[a_i,a_j]|^2\le4\sum_{i<j}|a_i|^2|a_j|^2\le4|a|^4$. Put $x=\|\nabla a\|_2$, $y=\|a\|_4$ and $f=\|F_a\|_2$. Step 1.1 and $da=F_a-a\wedge a$ give $x\le f+2y^2$. Choose $\varepsilon=(4S)^{-1}$. If $y\le\varepsilon$, step 1.2 gives $2y^2\le2\varepsilon Sx=x/2$, so $x\le2f$, $\|a\|_2\le2Pf$, and $y\le2Sf$. Their sum is at most $C f$ with $C=2(1+P+S)$. [step 1.1, step 1.2, algebra, choose]

3.1 **Rescaling.** For a form $a$ on $B_r$ set $b(y)=r\sum_i a_i(ry)\,dy_i$ on $B_1$, the pullback by $y\mapsto ry$. Direct differentiation gives $F_b(y)=r^2F_a(ry)$ in coefficients; $d^*b=0$ and $b(\nu)=0$ follow from the corresponding conditions on $a$. Changing variables in four dimensions yields $\|b\|_4=\|a\|_4$, $\|\nabla b\|_2=\|\nabla a\|_2$, $\|b\|_2=r^{-1}\|a\|_2$, and $\|F_b\|_2=\|F_a\|_2$. Applying step 2.1 proves the claimed estimate with the same $\varepsilon,C$ for every $r>0$. [step 2.1, given, algebra]

4.1 **A Hilbert space for weak extraction.** Give the real vector space $H=W^{1,2}(B_r;\mathfrak{su}(2)\otimes\mathbb R^4)$ the equivalent Hilbert norm $\|u\|_H^2=\|u\|_2^2+\sum_i\|\partial_i u\|_2^2$. The map $u\mapsto(u,\partial_1u,\ldots,\partial_4u)$ has closed image in the finite product of real $L^2$ Hilbert spaces: if those entries converge strongly to $(u,g_1,\ldots,g_4)$, testing against any compactly supported smooth $\phi$ and using [F5] passes $\int u_j\partial_i\phi=-\int(\partial_i u_j)\phi$ to $\int u\partial_i\phi=-\int g_i\phi$, which is precisely the definition of the weak derivative $g_i=\partial_i u$. A finite product of complete inner-product spaces is complete componentwise, and a closed subspace is complete, so $H$ is Hilbert. Steps 2.1–3.1 bound $a_j$ in $H$ for fixed $r$ and bounded $\|F_{a_j}\|_2$. By [F4], extract a subsequence weakly converging in $H$ to $a\in H$. [F4, F5, step 2.1, step 3.1, construct]

5.1 **Strong extraction and the endpoint bound.** Apply [F3] componentwise to that subsequence to obtain a further subsequence converging strongly in $L^2$ to some $b$. For every $L^2$ coefficient test, the pairing is a bounded linear functional on $H$ by [F5], so weak $H$ convergence also gives weak $L^2$ convergence to $a$; testing the difference of the two limits against itself identifies $b=a$. The embedding $H\to L^4$ is bounded by [F1] rescaled to $B_r$, so weak $H$ convergence implies convergence of the pairings against every $h\in L^{4/3}$, because each such pairing is a bounded linear functional on $H$. If $a\ne0$ in $L^4$, use $h=|a|^2a/\|a\|_4^3$; its $L^{4/3}$ norm is one and its pairing with $a$ is $\|a\|_4$. Thus $\|a\|_4=\lim_j\int\langle a_j,h\rangle\le\varepsilon$; if $a=0$ this holds immediately. Interpolation [F5] between strong $L^2$ convergence and the bounded $L^4$ norms gives strong $L^p$ convergence for every $2<p<4$ along this same subsequence. The finite-volume inequality [F5] gives it for $1\le p<2$ as well. [F1, F3, F5, step 4.1, algebra]

6.1 **The quadratic term and curvature.** Bilinearity and the bracket bound from step 2.1 give $\|a_j\wedge a_j-a\wedge a\|_1\le2(\|a_j\|_2+\|a\|_2)\|a_j-a\|_2\to0$; here use the bilinear map $B(u,v)_{ik}=\tfrac12([u_i,v_k]-[u_k,v_i])$, for which $B(u,u)=u\wedge u$ and $|B(u,v)|\le2|u||v|$, and expand the difference as $B(a_j-a,a_j)+B(a,a_j-a)$ before applying [F5]. Weak $H$ convergence gives $da_j\rightharpoonup da$ in $L^2$, whereas $a\in L^4$ implies $a\wedge a\in L^2$. Therefore $F_{a_j}\to F_a=da+a\wedge a$ against every compactly supported smooth two-form test. The bounds $\|F_{a_j}\|_2\le M$ and $\|F_a\|_2<\infty$ extend this convergence to every $L^2$ test: approximate it in $L^2$ by a smooth compactly supported test using [F5], bound the error by $(M+\|F_a\|_2)$ times the approximation error, and then take the limit for the smooth test. This proves $F_{a_j}\rightharpoonup F_a$ in $L^2$. [F5, step 2.1, step 4.1, step 5.1, algebra]

7.1 **Passing the constraints.** Integration by parts [F2] gives $\int\langle a_j,d\phi\rangle=0$ for every smooth $\phi$ on the closed ball, since $d^*a_j=0$ and $a_j(\nu)=0$. Strong $L^2$ convergence passes the identity to $a$; in particular compactly supported tests give $d^*a=0$ distributionally. This proves the asserted combined weak boundary condition without invoking a trace identification. The Euclidean self-dual projection $P_+=(1+*)/2$ is a bounded linear map on $L^2$ two-forms. If $P_+F_{a_j}=0$, step 6.1 passes its pairings with all tests to $P_+F_a=0$. [F2, F5, step 5.1, step 6.1, algebra]

8.1 **Equivariance and conclusion.** Pullback by a fixed $\gamma\in O(4)$ is an isometry of the $L^2$ space of one-forms on $B_r$, by the orthogonal coefficient transformation and its unit absolute Jacobian. The fixed map $\sigma(\gamma)$ is also an isometry. Consequently $\gamma^*a_j=\sigma(\gamma)a_j$ and strong $L^2$ convergence imply $\gamma^*a=\sigma(\gamma)a$ in $L^2$, hence almost everywhere. This holds for every element of the fixed finite group; if simultaneous representatives are desired, take the union of the finitely many exceptional null sets. Steps 3.1 and 4.1–7.1 prove all remaining assertions. Full AC is used only through the exact analytic and weak-extraction suppliers [F1], [F3] and [F4], including their countable-choice instances. [F1, F3, F4, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, algebra] ∎

## Scope and source notes

This is the coercive estimate and weak-extraction part of the critical four-dimensional local-gauge route. The boundary identity and nonlinear absorption are proved explicitly above. Wehrheim's public introduction states a stronger small-curvature local gauge theorem and the relevant Hodge estimate, but does not contain the book's proof chapters; those theorem statements are context, not premises of this proof. Hunter's complete notes supply the divergence, Sobolev and Rellich arguments, also available through the proved local items cited in the Facts.

The lemma starts with smooth forms already in the specified small $L^4$ gauges. It does not construct gauge transformations from small $L^2$ curvature, establish compatible gauges on overlaps, remove point or codimension-two singularities, or prove perturbed singular ASD transversality, gluing or Floer invariance. Finite equivariance is preserved when present in these given gauges; existence of equivariant gauges is not inferred. Those further prerequisites remain required for the full instanton constructions.
