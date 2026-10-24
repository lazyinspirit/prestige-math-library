---
id: rem-topology-conventions
kind: remark
title: "The four live convention forks of general topology and which side this library takes on each"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-neighbourhood-top, def-topological-space, def-standard-topologies, def-first-countable-top,
       def-topology-basis-subbasis, thm-basis-criterion, def-countable, def-sequence-convergence-top,
       def-natural-numbers, def-sequence]
justified_by: []
aliases: []
landmark: false
short: "convention forks of general topology"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: b8daa0066be69a8cb42fc67df73b3c637107d2f050f65cd8ac6bedcca76f9638
    item_sha256: aae41d44bfcd5e2e6365cfa5cc0a4b8ef87e17d8ad9732ca979ee887c900cb5b
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "General topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/General_topology"
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "Comparison of topologies (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Comparison_of_topologies"
    - title: "Subbase (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subbase"
pipeline_run: null
---

General topology is a subject whose textbooks disagree with one another on
vocabulary far more than on content. Four of those disagreements are live inside
this page, in the sense that a reader arriving with the other convention would
misread a statement here rather than merely find it unfamiliar. Each is settled
below, once, and the settlement is used without further comment everywhere on
these two pages. Where this library's choice is the less common one it is said so.

**1. A neighbourhood need not be open.** A set $N$ is a neighbourhood of $x$ when
some open $U$ satisfies $x \in U \subseteq N$ ([[def-neighbourhood-top]]). The
competing convention, used by Munkres among many others, reserves the word for
*open* sets containing $x$. A condition quantified over every neighbourhood is
equivalent to its restriction to open neighbourhoods when the condition is
preserved on enlarging the set, as eventual-membership and the standard local
tests are; this is not true for an arbitrary predicate. The wider notion is
chosen because it makes the neighbourhoods of a point a filter, and because a
neighbourhood *base* is then allowed to consist of sets that are not open. This
library writes **open neighbourhood** in full whenever openness is being used.

**2. The empty intersection is the whole set, and a subbasis need not cover.**
In [[thm-basis-criterion]] the finite intersections of a subbasis $\mathcal{S}$
include the intersection of *no* members, which is $X$; consequently
$X$ is always basic, the criterion (B1) is automatic, and no covering hypothesis
$\bigcup \mathcal{S} = X$ is imposed on a subbasis
([[def-topology-basis-subbasis]]). The competing convention admits only nonempty
finite intersections and adds the covering hypothesis. The two give the same
generated topology whenever both apply, and they differ exactly at
$\mathcal{S} = \varnothing$ and at families that do not cover: here
$\langle \varnothing \rangle$ is the indiscrete topology $\{\varnothing, X\}$,
whereas under the other convention it is undefined. Because the choice is
invisible in the notation, it is stated in the theorem itself as well as here.

**3. "Basis" is a relation, not a property.** A family is a basis **for a
topology**; "$\mathcal{B}$ is a basis" alone means "$\mathcal{B}$ is a basis for
some topology", and [[thm-basis-criterion]] says exactly which families those are
and that the topology is then unique. Some texts define a basis abstractly by the
two conditions (B1) and (B2) and only afterwards attach a topology to it; others
define it only relative to a topology already given, as here. The distinction is
harmless once the criterion is available, and it is recorded because the phrase
"let $\mathcal{B}$ be a basis" is ambiguous without it. The same remark applies
to *subbasis*, which is always relative to the topology it generates.

**4. Coarser and finer, never weaker and stronger.** For topologies on one set,
$\mathcal{T}_1 \subseteq \mathcal{T}_2$ is read "$\mathcal{T}_1$ is coarser,
$\mathcal{T}_2$ is finer" ([[def-topological-space]]). The synonyms
*smaller/larger* are unambiguous and are occasionally used. The pair
*weaker/stronger* is used in **both** directions in the literature — some authors
call the topology with fewer open sets weaker, others call it stronger because it
makes more maps continuous into the space — and this library therefore does not
use it at all. The discrete topology is the finest and the indiscrete the
coarsest ([[def-standard-topologies]]).

**Two conventions inherited from earlier pages, which are not forks decided
here.** They are listed because they change the reading of statements on this
page, not because this page chooses them.

- **$\mathbb{N}$ contains $0$ and sequences are indexed from $0$**
  ([[def-natural-numbers]], [[def-sequence]], [[def-sequence-convergence-top]]).
  An index range copied from a text that starts at $1$ must be shifted before it
  is used here; on these pages every radius written $1/(k+1)$ rather than $1/k$
  is an instance.
- **"Countable" means "at most countable"** ([[def-countable]]), so a finite set
  is countable. Two consequences on this page: a *first countable* space is
  allowed a finite neighbourhood base ([[def-first-countable-top]]), which is what
  makes every discrete space first countable; and the closed sets of the
  cocountable topology include all the finite sets
  ([[def-standard-topologies]]).

**One thing this page deliberately does not fix.** No separation axiom is built
into the word *space*: points need not be closed and distinct points need not be
separated by disjoint open sets ([[def-topological-space]]). Older texts, and
Bourbaki for *compact*, build separation into the basic vocabulary; here every
separation property is a hypothesis, written out where it is used, and the only
one that appears on this page is the Hausdorff condition, quoted from the metric
development rather than defined.
