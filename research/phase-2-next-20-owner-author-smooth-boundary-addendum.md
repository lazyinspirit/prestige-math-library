# Item 19: exact boundary obstruction addendum

Prepared for the smooth author after the owner's reported 18:40 resolution. This is candidate text for serial integration into `lem-relative-smoothing-of-a-continuous-simplex-along-its-faces`, retaining its positive boundaryless proof. No canonical item, fragment, proof contract, scope record, or workflow state is edited here. The raw prism repair is outside this bounded addendum.

## Read state and mathematical evidence

Read the current canonical item in full, including proof steps 1.1–8.1, and its current fragment contract. Re-read the current smooth simplex definition and standard smooth-step definition. Read in full the following Taylor items:

* `cor-multivariable-taylor-formula-with-peano-remainder`;
* `def-multivariable-taylor-polynomial`;
* `thm-multivariable-taylor-formula-with-lagrange-remainder`;
* `cor-second-order-taylor-expansion-with-the-hessian` and its Hessian definition (examined but not needed in the proposed proof below).

The addendum deliberately applies the multi-index Peano formula directly, so it does not need a separate use of mixed-partial symmetry or a Hessian theorem. The C² scalar extension is restricted to a small open Euclidean ball about the origin, which satisfies the supplier's openness and convexity hypotheses. Setting k=2 then supplies an honest quadratic expansion with little-o remainder.

The two Whitney proof paragraphs quoted below were read in full in the previous candidate subtask together with every intervening proof paragraph. No new external source retrieval occurred, no source fetch is claimed, and all existing retry/source obligations remain unchanged. No new published defect is alleged.

## Exact statement and fact amendments

Replace only the last sentence of the current Statement (the sentence beginning “The boundaryless target qualification is essential”) by:

> The boundaryless hypothesis cannot be removed: for the boundary target $[0,\infty)$ there are compatible smooth faces of a $3$-simplex, an explicit continuous filling, and compatible constant prescribed face homotopies, for which no filling with a $C^2$ scalar extension to an affine neighbourhood exists. In particular there is no smooth filling in the sense of [F1]. This counterexample requires no choice axiom.

In actual item text, use the declared item link `[[def-smooth-singular-simplex]]` in place of the forward fact label [F1] in the Statement if the local style excludes Statement fact labels.

Append this fact before [A1]:

> [F6] On an open convex Euclidean neighbourhood, a $C^2$ function has its quadratic Taylor polynomial plus a remainder $o(\|h\|^2)$ at the expansion point ([[cor-multivariable-taylor-formula-with-peano-remainder]], with $k=2$).

Add `cor-multivariable-taylor-formula-with-peano-remainder` to the item and owned fragment dependencies. No new item or page is needed. The existing step 8.1's discussion of countable choice concerns the positive construction; the new explicit counterexample uses no choice. Remove only its terminal proof square so the proof continues into the following steps.

## Exact additional proof text

9.1 For the boundary-target counterexample, take $D=\{(x,y,z)\in\mathbb R^3:x,y,z\ge0,\ x+y+z\le1\}$, affinely identified with $\Delta^3$ by the coordinates $(1-x-y-z,x,y,z)$, and take $N=[0,\infty)$. Let $s_0$ be the standard smooth step in [F5] and put $\rho(s)=1-s_0(4s-1)$. Thus $\rho$ is smooth on $\mathbb R$, equals one for $s\le1/4$, and equals zero for $s\ge1/2$. Prescribe on the four faces
$$g_z(x,y,0)=(x-y)^2\rho(x+y)^2,\qquad g_y(x,0,z)=(x-z)^2\rho(x+z)^2,$$
$$g_x(0,y,z)=(y-z)^2\rho(y+z)^2,\qquad g_0|_{\{x+y+z=1\}}=0.$$
Each formula is smooth and nonnegative on its entire affine face plane, since it is a product of squares or zero. Thus each $g_i$ is a smooth simplex into $[0,\infty)$ with an extension that stays in the target, as required by [F1]. [F1, F5, algebra]

10.1 These face maps agree on every intersection. On the $x$-axis edge the restrictions of $g_z$ and $g_y$ are both $x^2\rho(x)^2$; on the $y$-axis edge those of $g_z$ and $g_x$ are both $y^2\rho(y)^2$; on the $z$-axis edge those of $g_y$ and $g_x$ are both $z^2\rho(z)^2$. On the intersection of the fourth face with $z=0$, the argument of $\rho$ in $g_z$ is $x+y=1$, so the restriction is zero and agrees with $g_0$. On its intersections with $y=0$ and $x=0$, the corresponding arguments are $x+z=1$ and $y+z=1$, respectively, again giving zero. These are all six pairwise intersections; their further vertex restrictions therefore agree as well. [step 9.1, algebra]

11.1 Put $q(x,y,z)=x^2+y^2+z^2-2xy-2xz-2yz$ and define
$$f(x,y,z)=\max\{q(x,y,z),0\}\rho(x+y+z)^2\quad\text{on }D.$$
This is continuous and nonnegative. On $z=0$ one has $q=(x-y)^2$, so $f=g_z$ there; on $y=0$ and $x=0$ one similarly has $q=(x-z)^2$ and $q=(y-z)^2$, giving the other prescribed maps. On $x+y+z=1$, the factor $\rho(1)^2$ is zero, giving $g_0$. Thus $f$ is a continuous filling of this exact face family. Set $H_i(u,t)=g_i(u)$ for every $t\in[0,1]$. These are compatible constant homotopies from the original face restrictions to their prescribed smooth values. In fact their entire affine-plane extensions can be made independent of real $t$, so no time-endpoint regularity qualification removes this witness. [step 9.1, step 10.1, algebra]

12.1 Suppose a filling $g:D\to[0,\infty)$ of these face maps had a $C^2$ scalar extension $h$ to an open affine neighbourhood of $D$. A smooth filling in [F1] would have such an extension. Restrict $h$ to a small open ball about $0$ and apply [F6] there. Write its quadratic Taylor expansion as
$$h(x,y,z)=c+a_x x+a_y y+a_z z+\alpha x^2+\beta y^2+\gamma z^2+\delta xy+\varepsilon xz+\zeta yz+o(x^2+y^2+z^2).$$
For all sufficiently small $t\ge0$, the axis restrictions are $h(t,0,0)=h(0,t,0)=h(0,0,t)=t^2$ by step 9.1. At $t=0$ this gives $c=0$. Substituting each axis, dividing by $t$ and letting $t\downarrow0$ gives $a_x=a_y=a_z=0$; then dividing by $t^2$ gives $\alpha=\beta=\gamma=1$. The face restrictions also give $h(t,t,0)=h(t,0,t)=h(0,t,t)=0$ for all sufficiently small $t\ge0$. Substitution and division by $t^2$ yield $\delta=\varepsilon=\zeta=-2$. Therefore the quadratic Taylor polynomial is exactly $q$. [F1, F6, step 9.1, algebra]

13.1 Evaluating that expansion along the interior diagonal gives $h(t,t,t)=-3t^2+o(t^2)$. For all sufficiently small positive $t$, its value is negative, while $(t,t,t)\in D$ whenever $3t\le1$. This contradicts the nonnegativity of $g=h|_D$. Hence these compatible faces and constant prescribed homotopies admit no such $C^2$ filling and in particular no smooth filling. The contradiction even allows the scalar extension to take negative values outside $D$, so it also applies under the stronger extension-into-target convention. All formulas and choices of this explicit witness are finite and require no choice axiom. Together with steps 1.1–8.1 this proves the positive boundaryless assertion and the claimed failure for boundary targets. [step 11.1, step 12.1, algebra] ∎

## Contract edits

For steps 9.1–13.1, add a derivation for each exact printed paragraph above, with `id: step-N.1`, `step: N.1`, `claim` equal to the actual mathematical paragraph preceding its bracketed inputs, and `inputs` equal to that paragraph's displayed bracket list. All five are substantive derivations, not routine-step exceptions.

Update the existing F1 citation's `uses` to `1.1, 5.1, 8.1, 9.1, 12.1`. Its existing exact Definition excerpt already establishes extension into the target and needs no altered quote.

The current F4 contract quotes only the final Whitney approximation Statement, which does not itself state the embedded-target retraction used in this proof. Replace that citation by the two exact `Proof` excerpts in the JSON block below, used at steps 3.1 and 4.1. Keep the actual auxiliary-proof locator `Proof 1.1–6.1` in the item's F4 fact.

Split the existing grouped F5 uses by source: the standard-step Definition and Remarks are used at 4.1 and 9.1; distance-to-set is used at 3.1 and 6.1. The finite ball and segment arguments in step 4.1 use the distance bound already proved in step 3.1, and do not require a new separate distance citation there. Exact Definition source text can be retained; add the exact Remarks excerpt giving smoothness and range.

Add F6 with the exact Peano Statement excerpt below and `uses: [12.1]`. The excerpt retains its nonempty natural-degree, convexity, openness, and C^k hypotheses; step 12.1 checks these locally with k=2.

Keep the existing empty/zero/one/degenerate/endpoint evidence, adding these item-specific sentences:

* `empty`: “The counterexample has the nonempty target [0,infinity), so it does not rely on a vacuous empty-target case.”
* `zero`: “The counterexample is in degree 3; steps 9.1–12.1 check its zero-valued vertex and bisector restrictions explicitly.”
* `degenerate`: “Steps 9.1–11.1 include the identically zero fourth face and constant face homotopies; they still satisfy the strong affine-extension convention.”
* `endpoints`: “Steps 10.1–11.1 verify all six edge intersections, their vertices, and both endpoints of every constant face homotopy; step 13.1 uses positive t with 3t<=1.”
* `nonempty-choice`: “Steps 9.1–13.1 give the boundary-target counterexample by explicit formulas without AComega or AC.”

For `iff-forward`, retain not_applicable with reason “The item states a boundaryless relative existence assertion and an explicit counterexample, not an equivalence.” For `iff-reverse`, replace the existing wording by “No converse is claimed; steps 9.1–13.1 explicitly disprove the unrestricted boundary-target analogue.”

If the strict schema allows a separate target-boundary case, add it as checked with evidence “Steps 9.1–13.1 prove failure for N=[0,infinity) by a continuous tetrahedron filling with compatible smooth faces and a forced negative quadratic term.” Otherwise keep that evidence inside the existing degenerate/endpoints entries and the Statement contract; do not invent an unsupported schema key.

The current item decision must be refreshed only after the integrating author writes and checks the complete changed item and contract under the current owner-resolved scope. This note does not record any decision.

## Exact replacement/additional citation records

The following are extracted verbatim from the current source sections; merge by the instructions above, rather than replacing every existing citation.

```json
[
  {
    "fact": "F4",
    "source": "thm-whitney-approximation-for-manifold-valued-maps",
    "source_section": "Proof",
    "quote": "1.1 If $M$ is empty, the empty smooth map and empty homotopy prove the claim. Otherwise $N$ is nonempty because $F$ exists. Choose by [L1] a proper smooth embedding $j:N\\to\\mathbb R^k$ and put $S=j(N)$. Its corestriction $j:N\\to S$ has smooth inverse. Set $f=j\\circ F$, which is continuous. Only some finite $k$ is needed, not the dimension-optimal Whitney embedding theorem. [A1, L1, L6, given, choose]",
    "uses": [
      "3.1",
      "4.1"
    ]
  },
  {
    "fact": "F4",
    "source": "thm-whitney-approximation-for-manifold-valued-maps",
    "source_section": "Proof",
    "quote": "6.1 Consequently $U=E(\\Omega)$ is open and contains $S$. The bijection $E:\\Omega\\to U$ has smooth inverse: every point admits a local smooth inverse by step 5.1, and these agree with the global inverse. Define $$R:U\\longrightarrow S,\\qquad R=\\pi\\circ(E|_\\Omega)^{-1}.$$ This is smooth, and $R(p)=p$ on $S$ because $E(p,0)=p$. This construction needs only the continuous radius $r/2$, not a smooth minorant, a partition of unity, or a general ambient tubular-neighbourhood theorem. [L2, L6, step 5.1, construct]",
    "uses": [
      "3.1",
      "4.1"
    ]
  },
  {
    "fact": "F5",
    "source": "def-the-standard-smooth-step-function",
    "source_section": "Remarks",
    "quote": "The function $\\sigma$ is smooth on all of $\\mathbb R$ and takes values in $[0,1]$.",
    "uses": [
      "4.1",
      "9.1"
    ]
  },
  {
    "fact": "F6",
    "source": "cor-multivariable-taylor-formula-with-peano-remainder",
    "source_section": "Statement",
    "quote": "Let $k\\in\\mathbb N$ with $k\\ge1$, let $V\\subseteq\\mathbb R^m$ be open and convex, let $a\\in V$, and let $f\\in C^k(V)$. Then, as $h\\to0$ with $a+h\\in V$,\n\n$$f(a+h)=T_kf(a;h)+o(\\|h\\|^k).$$",
    "uses": [
      "12.1"
    ]
  }
]
```

## Exact added derivations and replacement boundary records

The derivation claims below are formatted from the completed proof text above; they contain no strategy-generated proof. Append `derivations_append` to the existing derivations and replace the existing boundaries by `boundaries_replace`; these wrapper keys are explanatory and are not proposed contract-schema fields.

```json
{
  "derivations_append": [
    {
      "id": "step-9.1",
      "step": "9.1",
      "claim": "For the boundary-target counterexample, take $D=\\{(x,y,z)\\in\\mathbb R^3:x,y,z\\ge0,\\ x+y+z\\le1\\}$, affinely identified with $\\Delta^3$ by the coordinates $(1-x-y-z,x,y,z)$, and take $N=[0,\\infty)$. Let $s_0$ be the standard smooth step in [F5] and put $\\rho(s)=1-s_0(4s-1)$. Thus $\\rho$ is smooth on $\\mathbb R$, equals one for $s\\le1/4$, and equals zero for $s\\ge1/2$. Prescribe on the four faces\n$$g_z(x,y,0)=(x-y)^2\\rho(x+y)^2,\\qquad g_y(x,0,z)=(x-z)^2\\rho(x+z)^2,$$\n$$g_x(0,y,z)=(y-z)^2\\rho(y+z)^2,\\qquad g_0|_{\\{x+y+z=1\\}}=0.$$\nEach formula is smooth and nonnegative on its entire affine face plane, since it is a product of squares or zero. Thus each $g_i$ is a smooth simplex into $[0,\\infty)$ with an extension that stays in the target, as required by [F1].",
      "inputs": [
        "F1",
        "F5",
        "algebra"
      ]
    },
    {
      "id": "step-10.1",
      "step": "10.1",
      "claim": "These face maps agree on every intersection. On the $x$-axis edge the restrictions of $g_z$ and $g_y$ are both $x^2\\rho(x)^2$; on the $y$-axis edge those of $g_z$ and $g_x$ are both $y^2\\rho(y)^2$; on the $z$-axis edge those of $g_y$ and $g_x$ are both $z^2\\rho(z)^2$. On the intersection of the fourth face with $z=0$, the argument of $\\rho$ in $g_z$ is $x+y=1$, so the restriction is zero and agrees with $g_0$. On its intersections with $y=0$ and $x=0$, the corresponding arguments are $x+z=1$ and $y+z=1$, respectively, again giving zero. These are all six pairwise intersections; their further vertex restrictions therefore agree as well.",
      "inputs": [
        "step 9.1",
        "algebra"
      ]
    },
    {
      "id": "step-11.1",
      "step": "11.1",
      "claim": "Put $q(x,y,z)=x^2+y^2+z^2-2xy-2xz-2yz$ and define\n$$f(x,y,z)=\\max\\{q(x,y,z),0\\}\\rho(x+y+z)^2\\quad\\text{on }D.$$\nThis is continuous and nonnegative. On $z=0$ one has $q=(x-y)^2$, so $f=g_z$ there; on $y=0$ and $x=0$ one similarly has $q=(x-z)^2$ and $q=(y-z)^2$, giving the other prescribed maps. On $x+y+z=1$, the factor $\\rho(1)^2$ is zero, giving $g_0$. Thus $f$ is a continuous filling of this exact face family. Set $H_i(u,t)=g_i(u)$ for every $t\\in[0,1]$. These are compatible constant homotopies from the original face restrictions to their prescribed smooth values. In fact their entire affine-plane extensions can be made independent of real $t$, so no time-endpoint regularity qualification removes this witness.",
      "inputs": [
        "step 9.1",
        "step 10.1",
        "algebra"
      ]
    },
    {
      "id": "step-12.1",
      "step": "12.1",
      "claim": "Suppose a filling $g:D\\to[0,\\infty)$ of these face maps had a $C^2$ scalar extension $h$ to an open affine neighbourhood of $D$. A smooth filling in [F1] would have such an extension. Restrict $h$ to a small open ball about $0$ and apply [F6] there. Write its quadratic Taylor expansion as\n$$h(x,y,z)=c+a_x x+a_y y+a_z z+\\alpha x^2+\\beta y^2+\\gamma z^2+\\delta xy+\\varepsilon xz+\\zeta yz+o(x^2+y^2+z^2).$$\nFor all sufficiently small $t\\ge0$, the axis restrictions are $h(t,0,0)=h(0,t,0)=h(0,0,t)=t^2$ by step 9.1. At $t=0$ this gives $c=0$. Substituting each axis, dividing by $t$ and letting $t\\downarrow0$ gives $a_x=a_y=a_z=0$; then dividing by $t^2$ gives $\\alpha=\\beta=\\gamma=1$. The face restrictions also give $h(t,t,0)=h(t,0,t)=h(0,t,t)=0$ for all sufficiently small $t\\ge0$. Substitution and division by $t^2$ yield $\\delta=\\varepsilon=\\zeta=-2$. Therefore the quadratic Taylor polynomial is exactly $q$.",
      "inputs": [
        "F1",
        "F6",
        "step 9.1",
        "algebra"
      ]
    },
    {
      "id": "step-13.1",
      "step": "13.1",
      "claim": "Evaluating that expansion along the interior diagonal gives $h(t,t,t)=-3t^2+o(t^2)$. For all sufficiently small positive $t$, its value is negative, while $(t,t,t)\\in D$ whenever $3t\\le1$. This contradicts the nonnegativity of $g=h|_D$. Hence these compatible faces and constant prescribed homotopies admit no such $C^2$ filling and in particular no smooth filling. The contradiction even allows the scalar extension to take negative values outside $D$, so it also applies under the stronger extension-into-target convention. All formulas and choices of this explicit witness are finite and require no choice axiom. Together with steps 1.1–8.1 this proves the positive boundaryless assertion and the claimed failure for boundary targets.",
      "inputs": [
        "step 11.1",
        "step 12.1",
        "algebra"
      ]
    }
  ],
  "boundaries_replace": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "Step 8.1 excludes maps from the nonempty simplex into empty target; step 1.1 handles empty boundary. The counterexample has the nonempty target [0,infinity), so it does not rely on a vacuous empty-target case."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Step 1.1 handles n=0 with a constant homotopy. The counterexample is in degree 3; steps 9.1–12.1 check its zero-valued vertex and bisector restrictions explicitly."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Steps 6.1–7.1 preserve both endpoint face homotopies for n=1 as for every n."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 1.1 fixes every already smooth simplex when its face homotopies are constant, including constant simplices. Steps 9.1–11.1 include the identically zero fourth face and constant face homotopies; they still satisfy the strong affine-extension convention."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Steps 2.1 and 6.1–7.1 verify t=0, t=1, all sides and boundary-time-one continuity. Steps 10.1–11.1 verify all six edge intersections, their vertices, and both endpoints of every constant face homotopy; step 13.1 uses positive t with 3t<=1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 8.1 charges only AComega for Whitney and embedding; all other choices are finite. Steps 9.1–13.1 give the boundary-target counterexample by explicit formulas without AComega or AC."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The item states a boundaryless relative existence assertion and an explicit counterexample, not an equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "No converse is claimed; steps 9.1–13.1 explicitly disprove the unrestricted boundary-target analogue."
    }
  ]
}
```
