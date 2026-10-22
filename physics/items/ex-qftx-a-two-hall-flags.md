---
id: ex-qftx-a-two-hall-flags
kind: example
title: "A2 Hall factorization counts extension flags"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-finite-acyclic-quiver-stability-data
  - lem-upper-half-plane-sum-phase-between
  - lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend
  - def-subobject-first-completed-finite-quiver-hall-algebra-and-tori
  - thm-finite-quiver-euler-and-skew-integration-is-multiplicative
  - def-qftx-hall-spectrum-generator
  - prop-qftx-hall-spectrum-invariance
dependency_roles:
  def-finite-acyclic-quiver-stability-data: mathematical-premise
  lem-upper-half-plane-sum-phase-between: mathematical-premise
  lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend: mathematical-premise
  def-subobject-first-completed-finite-quiver-hall-algebra-and-tori: mathematical-premise
  thm-finite-quiver-euler-and-skew-integration-is-multiplicative: mathematical-premise
  def-qftx-hall-spectrum-generator: mathematical-premise
  prop-qftx-hall-spectrum-invariance: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Bridgeland, Hall algebras and Donaldson–Thomas invariants"
      url: "https://arxiv.org/pdf/1611.03696"
      locator: "Sections 2.1 and 4.6: subobject convolution and the A2 wall-crossing example."
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, full lecture notes"
      url: "https://arxiv.org/pdf/math/0611617"
      locator: "Sections 1.3 and 3.3: Hall multiplication, filtration counting, and finite-field quiver Hall examples."
    - title: "Markus Reineke, The Harder–Narasimhan system in quantum groups and cohomology of quiver moduli"
      url: "https://arxiv.org/pdf/math/0204059"
      locator: "Sections 2 and 4: stability phases/slopes, HN filtrations, and the Hall-algebra HN system."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $k=\mathbb F_q$, $q>1$, and let $Q$ have one arrow $1\to2$. Write
$S_1=(k\to0)$, $S_2=(0\to k)$, and
$M_a=(k\xrightarrow{a}k)$ for $a\in k$. There are exactly two isomorphism
classes of representations of dimension vector $\mathbf d=(1,1)$: the zero
arrow class $M_0$ and one nonzero-arrow class $M_1$. Their automorphism
groups have orders $(q-1)^2$ and $q-1$, respectively. The only proper
nonzero subrepresentation of $M_1$ is $S_2$; the proper nonzero
subrepresentations of $M_0$ are $S_1$ and $S_2$. Use the subobject-first
product $(f\star g)(L)=\sum_{U\subseteq L}f(U)g(L/U)$ over embedded
subrepresentations, and let $\delta_M$ be the characteristic function of
the isomorphism class of $M$. Then
$$\delta_{S_1}\star\delta_{S_2}=\delta_{M_0},\qquad \delta_{S_2}\star\delta_{S_1}=\delta_{M_0}+\delta_{M_1}$$
in degree $\mathbf d$.

For charges $z_1,z_2\in\mathbb H:=\{z\in\mathbb C:
\operatorname{Im}z>0\}$, put
$\phi_i=\arg(z_i)/\pi$ and
$\phi(M_a)=\arg(z_1+z_2)/\pi$, using the principal argument. A nonzero
representation is semistable when each nonzero subrepresentation has phase
at most the phase of the whole representation; its Harder–Narasimhan
factors are the semistable quotients of its unique filtration in strictly
decreasing phase order. Let $S_Z(\phi)$ be the characteristic sum of zero
and all semistable isomorphism classes of phase $\phi$, and write
$\prod_{\phi}^{\searrow}S_Z(\phi)$ for their decreasing-phase Hall product.
If $\phi_1>\phi_2$, $M_1$ is
stable and $M_0$ has HN factors $S_1,S_2$ in that order. If
$\phi_2>\phi_1$, both $M_0$ and $M_1$ have HN factors $S_2,S_1$. When
$\phi_1=\phi_2$, both isomorphism classes are semistable in the same phase
factor. Thus the degree-$\mathbf d$ term of the decreasing-phase Hall product
contains $M_0$ and $M_1$ once each in every chamber, while their positions
in the factorization change.

For the Euler integration use
$I(\delta_M)=|\operatorname{Aut}(M)|^{-1}X^{\mathbf d(M)}$ and
$X^{\mathbf e}X^{\mathbf f}
=q^{-\chi_Q(\mathbf f,\mathbf e)}X^{\mathbf e+\mathbf f}$. For the skew
integration use
$J(\delta_M)=t^{\chi_Q(\mathbf d(M),\mathbf d(M))}
|\operatorname{Aut}(M)|^{-1}x^{\mathbf d(M)}$, where $t=\sqrt q>0$,
$\langle\mathbf e,\mathbf f\rangle
=\chi_Q(\mathbf e,\mathbf f)-\chi_Q(\mathbf f,\mathbf e)$, and
$x^{\mathbf e}*x^{\mathbf f}
=t^{-\langle\mathbf f,\mathbf e\rangle}x^{\mathbf e+\mathbf f}$. Here
$$\chi_Q(\mathbf e,\mathbf f)=e_1f_1+e_2f_2-e_1f_2.$$
In either chamber the degree-$\mathbf d$ Euler-integrated coefficient is
$q/(q-1)^2\,X^{\mathbf d}$ and the skew-integrated coefficient is
$t^3/(q-1)^2\,x^{\mathbf d}$. The full completed equality is the preceding
proposition; this example calculates its first nontrivial A2 degree and
retains the automorphism weights.

## Example references

[[def-finite-acyclic-quiver-stability-data]]

[[lem-upper-half-plane-sum-phase-between]]

[[lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend]]

[[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]

[[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]

[[def-qftx-hall-spectrum-generator]]

[[prop-qftx-hall-spectrum-invariance]]

## Diagrammatic convention

The diagram is the quiver $Q$ with its single arrow directed from vertex $1$
to vertex $2$. The label $a$ is the linear map between the one-dimensional
vertex spaces; its value is zero for $M_0$ and nonzero for $M_1$. The
diagram fixes the representation convention only. The proof below checks
subrepresentations and basis changes algebraically and does not rely on the
drawing.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),>=stealth]
  \node[circle,draw] (one) at (0,0) {$1:k$};
  \node[circle,draw] (two) at (3,0) {$2:k$};
  \draw[->] (one) -- node[above] {$a$} (two);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite field $k=\mathbb F_q$, $q>1$, the one-arrow quiver
$1\to2$, the vertex charges $z_1,z_2\in\mathbb H$, and the finite-field
Hall conventions stated above.

[F1] [[def-finite-acyclic-quiver-stability-data]]: a representation is a
pair of vertex vector spaces and an arrow map; dimension vectors add in
short exact sequences; and the charge is $Z(\mathbf e)=e_1z_1+e_2z_2$.
A nonzero representation $M$ is semistable precisely when every nonzero
subrepresentation $U\subseteq M$ satisfies $\phi_Z(U)\le\phi_Z(M)$;
it is stable when the inequality is strict for every proper nonzero
subrepresentation.

[F2] [[def-subobject-first-completed-finite-quiver-hall-algebra-and-tori]]:
$(f\star g)(L)=\sum_{U\subseteq L}f(U)g(L/U)$, counting actual embedded
subobjects, and the dimension completion records each isomorphism class
once.

[F3] [[lem-upper-half-plane-sum-phase-between]]: the phase of the sum of
two charges in $\mathbb H$ lies strictly between their phases when those
phases differ, and lies on the same ray when they agree.

[F4] [[lem-quiver-hardernarasimhan-filtrations-exist-are-unique-and-descend]]:
each representation has a unique filtration with nonzero semistable
factors in strictly decreasing phase order.

[F5] [[thm-finite-quiver-euler-and-skew-integration-is-multiplicative]]:
the Euler integration weights $[M]$ by $1/|\operatorname{Aut}(M)|$ and
uses $X^{\mathbf e_1}X^{\mathbf e_2}
=q^{-\chi_Q(\mathbf e_2,\mathbf e_1)}X^{\mathbf d}$; the skew integration
weights $[M]$ by
$t^{\chi_Q(\mathbf d(M),\mathbf d(M))}/|\operatorname{Aut}(M)|$ and uses
$x^{\mathbf e_1}*x^{\mathbf e_2}
=t^{-\langle\mathbf e_2,\mathbf e_1\rangle}x^{\mathbf d}$.

[F6] [[def-qftx-hall-spectrum-generator]]: the phase-ordered factors
integrate to $P_Z^E$ and $P_Z^{\mathrm{sk}}$ in their respective
completions.

[F7] [[prop-qftx-hall-spectrum-invariance]]: the full completed generators
have equal chamber products; this example checks the degree-$\mathbf d$
coefficient explicitly.

## Verification

**Given:** The objects, charges and conventions in the Example.

1.1 After choosing bases at both vertices, a representation of dimension
$(1,1)$ is the scalar arrow $a\in k$. A change of bases
$(g_1,g_2)\in k^\times\times k^\times$ sends it to $g_2ag_1^{-1}$.
Therefore zero remains zero and every nonzero $a$ is isomorphic to $1$.
For $M_0$, every pair $(g_1,g_2)$ is an automorphism, so
$|\operatorname{Aut}(M_0)|=(q-1)^2$. For $M_1$, the automorphism condition
is $g_2=g_1$, so $|\operatorname{Aut}(M_1)|=q-1$. [F1, given, algebra]

2.1 A proper nonzero subrepresentation of a $(1,1)$ representation can
only have dimension $(1,0)$ or $(0,1)$. The latter is always preserved by
the arrow, whereas the former is preserved exactly when $a=0$. Hence the
subobject-first product counts one $S_1$ subobject in $M_0$ and none in
$M_1$, while it counts one $S_2$ subobject in each. The corresponding
quotients are $S_2$ for the first count and $S_1$ for the second; this gives
the two displayed Hall products. [F1, F2, step 1.1, algebra]

3.1 Each $S_i$ is stable because it has no proper nonzero subobject. The
phase of $M_a$ is the phase of $z_1+z_2$, strictly between the two simple
phases by [F3] when they differ. If
$\phi_Z(S_1)>\phi_Z(S_2)$, the only proper nonzero subobject $S_2$ of $M_1$
has lower phase, so $M_1$ is stable; $M_0$ has both simples as
subobjects and its unique HN factors are $S_1,S_2$. If
$\phi_Z(S_2)>\phi_Z(S_1)$, $S_2$ destabilizes $M_1$ and
$0\subset S_2\subset M_1$ has factors $S_2,S_1$; the split object $M_0$
has the same ordered factors. If the phases are equal, all proper
nonzero subobjects of both objects have the same phase as the object, so
both objects are semistable in the same phase factor. The uniqueness in
[F4] shows that these are exactly their HN placements. [F1, F3, F4,
step 2.1, algebra]

4.1 For either unequal-phase chamber, the Hall product has coefficient one
on each of $M_0,M_1$ in degree $\mathbf d$ by steps 2.1 and 3.1; on the
wall both occur in one semistable factor. Since
$\chi_Q(\mathbf e_1,\mathbf e_1)=
\chi_Q(\mathbf e_2,\mathbf e_2)=1$,
$\chi_Q(\mathbf e_2,\mathbf e_1)=0$, and
$\chi_Q(\mathbf e_1,\mathbf e_2)=-1$, [F5] and step 1.1 give
$$I(\delta_{M_0}+\delta_{M_1})=\left(\frac1{(q-1)^2}+\frac1{q-1}\right)X^{\mathbf d}=\frac q{(q-1)^2}X^{\mathbf d},$$
while the reversed product of simple factors has the same coefficient
because $X^{\mathbf e_2}X^{\mathbf e_1}
=qX^{\mathbf d}$. For the skew integration,
$\chi_Q(\mathbf d,\mathbf d)=1$ and
$\langle\mathbf e_1,\mathbf e_2\rangle=-1$; hence
$$J(\delta_{M_0}+\delta_{M_1})=\left(\frac t{(q-1)^2}+\frac t{q-1}\right)x^{\mathbf d}=\frac{t^3}{(q-1)^2}x^{\mathbf d},$$
and the reversed simple-factor product has coefficient
$t^2t/(q-1)^2=t^3/(q-1)^2$ as well, using $q=t^2$. This proves the
stated finite-degree comparison and its wall case without assigning a
physical interpretation. [F5, F6, F7, step 1.1, step 2.1,
step 3.1, algebra] ∎
