---
id: def-locally-factorial-scheme
kind: definition
title: "Locally factorial scheme"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-scheme
  - def-local-ring
  - def-unique-factorisation-domain
  - def-affine-open-subscheme
  - def-affine-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - thm-noetherian-ring-quotients-and-localisations
  - def-normal-noetherian-ring
  - thm-stalk-structure-sheaf-prime-localization
  - def-reduction-of-scheme
  - def-irreducible-component-scheme
  - def-integral-scheme
  - def-axiom-of-choice
  - lem-irreducibility-criteria-and-open-subspaces
  - lem-irreducible-components-of-a-topological-space
  - thm-irreducible-components-and-minimal-primes
  - thm-prime-spectrum-of-a-localisation-bijection
  - cor-noetherian-spectrum-has-finitely-many-irreducible-components
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 6 §6.4.4 and Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

A scheme $X$ is **locally factorial** if every local ring
$\mathcal O_{X,x}$, for $x\in X$, is a unique factorisation domain
([[def-local-ring]], [[def-unique-factorisation-domain]]). This is a condition
on the stalks; it does not assert that $X$ has an affine open cover whose
coordinate rings are unique factorisation domains. The empty scheme is locally
factorial vacuously.

Here is the componentwise form, with its hypotheses made explicit. Assume the
Axiom of Choice ([[def-axiom-of-choice]]), and suppose $X$ is a **Noetherian
normal scheme**: Noetherian means that $X$ has a finite affine open cover by
spectra of Noetherian rings ([[def-locally-noetherian-and-noetherian-scheme]]),
and normal means that each local ring is a normal Noetherian ring in the sense
of [[def-normal-noetherian-ring]]. Then $X$ is reduced, and its irreducible
components, with their reduced induced scheme structures, are integral,
pairwise disjoint, and open. Consequently $X$ is locally factorial if and only
if each of these components is locally factorial.

For the local-domain and reducedness inputs, fix a point $x$ and choose a chart
$U=\operatorname{Spec}A$ from the finite Noetherian affine cover, with $x$
corresponding to $\mathfrak p\subset A$. The stalk is
$\mathcal O_{X,x}\cong A_{\mathfrak p}$ by
[[def-affine-open-subscheme]], [[def-affine-scheme]], and
[[thm-stalk-structure-sheaf-prime-localization]]. It is Noetherian by
[[thm-noetherian-ring-quotients-and-localisations]]. It is a local normal ring
by the stated hypothesis, so the normal-ring condition at its unique maximal
ideal makes $\mathcal O_{X,x}$ an integrally closed domain
([[def-local-ring]], [[def-normal-noetherian-ring]]). Thus every stalk is a
domain. The nilpotent ideal sheaf has these stalkwise nilpotent elements as its
germs ([[def-reduction-of-scheme]]), so it is zero and $X$ is reduced.

To see why the components are disjoint, let distinct irreducible components
$C,D$ meet at $x$, and choose such a chart $U=\operatorname{Spec}A$ containing
$x$. The nonempty intersections $C\cap U$ and $D\cap U$ are irreducible closed
subsets of $U$. They are maximal there: if an irreducible closed subset of $U$
contains $C\cap U$, its closure in $X$ is irreducible, contains the dense open
subset $C\cap U$ of $C$, and hence equals $C$ by maximality; since the original
subset is closed in $U$, intersecting back with $U$ gives exactly $C\cap U$.
The same holds for $D$.
([[def-irreducible-component-scheme]],
[[lem-irreducibility-criteria-and-open-subspaces]],
[[lem-irreducible-components-of-a-topological-space]]) The affine components
therefore correspond to distinct minimal primes $\mathfrak q_C$ and
$\mathfrak q_D$ of $A$ contained in $\mathfrak p$
([[thm-irreducible-components-and-minimal-primes]]). Under the
prime-localisation correspondence, each remains minimal after extending to
$A_{\mathfrak p}$: a prime below an extension contracts to a prime below the
original minimal prime. The extensions remain distinct by injectivity of that
correspondence, so $A_{\mathfrak p}\cong\mathcal O_{X,x}$ would have two
distinct minimal primes
([[thm-prime-spectrum-of-a-localisation-bijection]]). This is impossible for
a domain, which has only the minimal prime $(0)$. Thus distinct components do
not meet.

Finally, each chart in the finite cover has only finitely many irreducible
components by [[cor-noetherian-spectrum-has-finitely-many-irreducible-components]].
Every irreducible component of $X$ meets a chart, and its intersection with
that chart is an affine component as above; distinct global components give
distinct such intersections because each is dense in its global component.
There are therefore only finitely many global components. They are closed and
cover $X$ by [[lem-irreducible-components-of-a-topological-space]]; since they
are disjoint and finite in number, each is also open. Its reduced induced
structure is integral by [[def-irreducible-component-scheme]] and
[[def-integral-scheme]]. Restriction to an open subscheme preserves the stalks
([[def-affine-open-subscheme]]), so the locally factorial condition holds on
$X$ exactly when it holds on every component.

This component conclusion is asserted for the Noetherian normal case above.
For arbitrary schemes outside the locally Noetherian setting, no openness or
componentwise conclusion is being asserted.
