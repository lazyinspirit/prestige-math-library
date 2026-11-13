---
id: op-expander-sync-higher-sphere-question
title: Extensions to higher-dimensional phase spheres
kind: open-problem
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-kuramoto-system
  - def-expander-sync-global-synchrony
  - def-expander-prereq-sphere-vector-configurations
  - math:def-countable-choice
formulation_deps:
  - def-expander-sync-kuramoto-system
  - def-expander-sync-global-synchrony
  - def-expander-prereq-sphere-vector-configurations
  - math:def-countable-choice
argument_deps: []
dependency_roles:
  def-expander-sync-kuramoto-system: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-sphere-vector-configurations: mathematical-premise
  math:def-countable-choice: mathematical-premise
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, paragraph beginning ‘We suspect that our results
        may admit other generalizations’
      statement: The authors suggest that their results may generalize to oscillators
        on higher-dimensional spheres.
      hypotheses: The passage proposes a direction and does not specify a
        sphere-valued interaction law or a theorem with hypotheses.
      reading_limits: The original PDF p. 39 was inspected in text and image for
        attribution and scope. It specifies neither a higher-sphere theorem nor
        current unresolved status. It is not used as proof of a generalization.
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 5, Section 1.1, Proof overview, first paragraph
      statement: Starting from a candidate stable circle state, amplification enlarges
        arcs while graph expansion increases their enclosed phase mass, with
        controlled angle increments; stability conditions then produce a
        contradiction unless the state is synchronized.
      hypotheses: Description of the article’s circle-model method for stable states
        under its expansion and stability conditions; no higher-sphere dynamics
        or theorem is supplied.
      reading_limits: Original PDF p. 5 text and image inspected for the method
        description. This attribution does not establish transfer to higher
        spheres or unresolved status of such a transfer.
    - title: Galina Sidorenko and Johan Thunberg, Attracting Rotations Obstruct
        Almost-Global Consensus on Spheres over Strongly Connected Graphs
        (arXiv:2610.28341v1, 20 October 2026)
      url: https://arxiv.org/pdf/2610.28341v1
      locator: PDF p. 1, Section 1, equation (1); p. 2, Section 2.1, equation (3) and
        volume convention; p. 9, Section 6, final paragraph
      statement: For the normalized weighted-sum sphere update (1), Section 6 asks
        which additional conditions on directed weights ensure almost-global
        consensus. Sections 1 and 2.1 specify the model, nonzero denominators
        under (3), and Riemannian volume on the product of spheres.
      hypotheses: Finite fixed nonnegative weight matrix A; strongly connected
        directed support; a_ii > sqrt(2) sum_(j != i) a_ij for every i. The
        displayed subquestion specializes ambient dimension d to r >= 3;
        initial-state null sets use product-sphere Riemannian volume.
      reading_limits: Independently inspected version-1 PDF pp. 1–2 and 8–9, including
        the p. 9 image, and primary HTML Sections 1, 2.1 and 6. On 14 November
        2026 the arXiv abstract page lists only v1. Review establishes the
        explicit dated source question and its hypotheses; it is not an
        exhaustive status survey or a validation of the paper’s other proofs.
        Full characterization below sharpens the authors’ question about
        additional conditions.
    - title: Johan Markdahl, Johan Thunberg and Jorge Gonçalves, Almost Global
        Consensus on the n-Sphere (arXiv:1609.04885v4)
      url: https://api.repository.cam.ac.uk/server/api/core/bitstreams/80f6eac2-24d6-445d-b808-fce7774cea40/content
      locator: PDF p. 2, System 1; p. 3, Algorithm 3, Definitions 4–5, Algorithm 8 and
        Remark 9; p. 5, Theorem 13
      statement: For System 1 under Algorithm 8 on a sphere of dimension at least two,
        the consensus set is almost globally asymptotically stable and every
        trajectory converges to a point. Algorithm 3’s positive constant
        symmetric edge gains are included by Remark 9.
      hypotheses: Finite connected undirected simple graph. System 1 is xdot_i=(I-x_i
        x_i^T) sum_j f_ij(s_ij)x_j, s_ij=1-x_i^T x_j. On S^m with m>=2,
        Algorithm 8 requires real analytic symmetric gains, positive on 0<s<=2,
        and (m-2+s)s f_ij(s)-(2-s)s^2 f_ij_prime(s)>0 there. The status
        paragraph uses only positive constant symmetric gains, which Remark 9
        explicitly includes.
      reading_limits: Independently read PDF pp. 2–5 for the model, gain conditions,
        null-set and attraction definitions, Remark 9 and the statement of
        Theorem 13; primary repository PDF also opened. The source’s sphere
        dimension n is denoted m in these hypotheses and equals r-1 here; its
        agent count N is the present n. Theorem 13’s proof and its cited
        dynamical inputs were not reconstructed. Only the stated constant-gain
        case is reported.
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 7
---

## Open problem

Can the article’s synchronization results and amplification techniques be generalized from circle phases to oscillators on higher-dimensional spheres? More precisely, for integers $r\ge 3$ and $n\ge 1$, which sphere-valued interaction laws and graph hypotheses, if any, yield an analogue of the circle-model conclusion that almost every initial configuration converges to a fully synchronized configuration? Can an analogue of the article’s amplification argument establish such a conclusion?

Here a configuration consists of vectors $u_1,\ldots,u_n\in S^{r-1}=\{u\in\mathbb R^r:\|u\|_2=1\}$; fully synchronized means $u_1=\cdots=u_n$. The choice of dynamics, the measure used for “almost every,” and the precise graph and convergence hypotheses are part of the question, not assumptions settled by the article. The circle comparison is the homogeneous graph Kuramoto system, whose phase at each vertex lies in $S^1$; its global-synchrony definition uses convergence in a rotating frame from all initial states outside a phase-volume null set.

The amplification question concerns the article’s method of tracking how lower bounds on the numbers of phases in specified angular regions change as those regions vary. It asks whether an appropriate higher-sphere counterpart exists; it does not assert that circle arcs or their estimates transfer unchanged.

For the cited circle-model interfaces, assume countable choice, as required by their stated construction.

A precise directed discrete subquestion, sharpening the independent source's question about additional weight conditions, is to characterize all nonnegative matrices $A=(a_{ij})_{i,j=1}^n$ with strongly connected directed support and $a_{ii}>\sqrt{2}\sum_{j\ne i}a_{ij}$ for every $i$, for which the interaction law

$$u_i(k+1)=\frac{\sum_{j=1}^n a_{ij}u_j(k)}{\|\sum_{j=1}^n a_{ij}u_j(k)\|_2},\qquad i=1,\ldots,n,\quad k=0,1,\ldots,$$

on $(S^{r-1})^n$, with $r\ge3$ and $n\ge1$, converges for almost every initial configuration to a single configuration $(v,\ldots,v)$, where $v\in S^{r-1}$ may depend on the initial configuration. Here "almost every" uses the product of the usual Riemannian volumes on the spheres. Directed support has an edge $j\to i$ when $i\ne j$ and $a_{ij}>0$; strongly connected means that every vertex can reach every other by directed edges, allowing a path of length zero from a vertex to itself. The cited strict diagonal bound ensures that every denominator is nonzero.

## Open problem references

[[def-expander-sync-kuramoto-system]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-sphere-vector-configurations]]

[[math:def-countable-choice]]

[Article research direction, PDF p. 39](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf)

[Article amplification overview, PDF p. 5](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf)

[Sidorenko–Thunberg, Sections 1, 2.1 and 6](https://arxiv.org/pdf/2610.28341v1)

## Status

**Source/status review: 14 November 2026.** Sidorenko–Thunberg explicitly ask which additional directed-weight conditions ensure almost-global consensus, in Section 6 of arXiv:2610.28341v1 (20 October 2026), under the displayed update and diagonal bound. The full characterization above is a sharpened formulation of that source question. This discrete directed model is an illustrative part of the broad law-and-graph question, independently attributed; it is not a model specified by the original article.

An affirmative continuous-time case is already established: for a finite connected undirected simple graph with constant edge gains $b_{ij}=b_{ji}>0$, the flow

$$\dot u_i=(I-u_i u_i^{\mathsf T})\sum_{j:\{i,j\}\in E} b_{ij}u_j,\qquad u_i\in S^{r-1},\quad r\ge3,$$

converges to a fully synchronized point for almost every initial configuration, and every trajectory converges to a point. This is the constant-gain case in Markdahl–Thunberg–Gonçalves, Theorem 13, with Algorithm 3 included in Algorithm 8 by Remark 9. Null sets are those for product-sphere volume. Thus the mere existence of higher-sphere laws yielding almost-everywhere synchronization is settled in this scope; it is not being labeled unsolved.

The article proposes higher-dimensional spheres as a possible generalization, without specifying a sphere-valued interaction law or asserting a corresponding theorem. The broad law-and-graph classification contains the directed discrete subquestion; a complete classification would settle that subquestion as well. The amplification question remains an attributed research direction whose exact method-transfer status is not determined here; no claim that it is an independently established open conjecture is made. The dated review checks the cited source question and the known affirmative case, not an exhaustive literature survey or those papers' proofs.

## Source notes

The research direction is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), PDF p. 39, Section 7. The source is attribution for the question, not a proof of an answer. Its amplification-method description is separately located at PDF p. 5, Section 1.1.

The directed discrete subquestion is independently sourced to [Sidorenko–Thunberg, Section 6](https://arxiv.org/pdf/2610.28341v1), PDF p. 9; the model, diagonal bound and volume convention are on pp. 1–2. The known continuous-time case is reported from [Markdahl–Thunberg–Gonçalves, Theorem 13](https://api.repository.cam.ac.uk/server/api/core/bitstreams/80f6eac2-24d6-445d-b808-fce7774cea40/content), PDF p. 5, with the constant-gain inclusion on p. 3.
