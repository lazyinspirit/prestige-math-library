# Sound nonconvex SCAFFOLD repair proposal

Proof-only staging; no actual item or metadata edits. Date: 2026-10-19.

## Source and local reading

Read CLAUDE.md fully, README.md fully, and applicable schema/workflow instructions. Verified `model_auto_compact_token_limit = 500000` by reading only that setting. Read all current `lem-scaffold-nonconvex-*`, `alg-scaffold`, trajectory definition, control-tracking identity, and combined rates theorem (including all current proof obligations). Independently downloaded https://cs.nyu.edu/~mohri/pub/scaffold.pdf to `/tmp/nonconvex-independent-scaffold.pdf`; SHA256 `5b1ce1c57658d1d939ba12df0e55899f5eb395a310742bef413c2f739a3c7db2`, identical to existing `/tmp/ml30-scaffold.pdf`. Read the full Appendix E.2, printed PDF pp.31–35, in `/tmp/ml30-scaffold-clean.txt` lines3753–4355. The source is provenance, not a substitute for the following proof.

## Defects and hypotheses

The current lag lemma's first inequality is not established: participation indicators cannot be factored out of expressions containing the new server point. The new server displacement depends on the same selected client sample. Source Lemma15 makes this same unjustified factorization. This note does not claim a counterexample to the final numerical inequality; it identifies a false independence move in the proof and supplies a replacement inequality.

The source's variance discussion also treats stored adaptive gradient draws too much like fresh gradient noise and uses endpoint/query indices inconsistently. Use the current locally proved server and drift inequalities instead. The current control identity's unconditional residual bound is sound under independent fresh uniform client sampling: conditional on the latest participation event, the within-round oracle errors are martingale differences; persistence is an independent selection mixture. It does NOT assert zero noise conditional on the entire list of adaptive anchors, and any such assertion in consumers must be removed. Its F3 wording in the lag lemma currently asserts a conditional mean and must be changed.

Assume beta>0, K>=1, eta_g>=1, exact gradient-consistent initialization, fresh uniform fixed-size client samples independent of previous history, and local oracle errors centered conditional on all information before each oracle draw with conditional second moment <=sigma². Counterfactual paths for every client can be generated using fresh oracle randomness independently of the client sample; selected paths have the actual law. Global sequential conditioning includes any previously exposed current-round draws, so the fresh error sum has the required martingale orthogonality. Local errors need not be independent of subsequent adaptive query points. All moments below are unconditional; finite-horizon square integrability follows inductively from Lipschitz gradients and finite oracle second moments. Axiom of Choice remains only the existing conditional-expectation interface assumption.

Write p=S/N, t=K eta_l eta_g, h=beta t, G=E||grad f(x_{r-1})||², X=Xi_{r-1}, E=E_r, D2=E||Delta||², M2=E||E[Delta|past]||², and q=sigma²/(KS). Current sound suppliers give

    M2 <= 2t² beta² E + 2t² G,
    D2 <= 6t² beta² E + 12t² beta² X + 3t² G + 18t² q,
    E <= 72t²/eta_g² (G+beta² X) + 96t² sigma²/(K eta_g²).

The drift supplier requires h<=p^(2/3)/24, automatically implied by the step used below. Its proof correctly removes only the fresh current oracle cross term; it makes no independence assumption about future adaptive queries.

## Correct tracking recursion

Set x=x_{r-1}, z_{ik}=alpha_{ik}^{r-1}-x, w_{ik}=y_{i,k-1}^r-x and I_i=1{i selected}. Define

    Z=(KN)^(-1) sum_{i,k} z_{ik},
    U=(KN)^(-1) sum_{i,k} I_i w_{ik},
    V=(KN)^(-1) sum_{i,k} I_i z_{ik}.

Expand the actual stored-anchor update before any expectation:

    Xi_r = (1-p)X+pE +D2 -2 E<Z,Delta>-2 E<U,Delta>+2 E<V,Delta>.

Here only the squared norm BEFORE subtraction of Delta uses the independent fresh participation probability p. The cross terms retain their actual dependence on Delta. Jensen yields E||Z||²<=X. Since exactly S indicators equal one,

    ||U||² <= p (KN)^(-1) sum I_i ||w_{ik}||²,
    ||V||² <= p (KN)^(-1) sum I_i ||z_{ik}||²,

and consequently E||U||²<=p²E and E||V||²<=p²X. The first estimate uses counterfactual local paths independent of the current client selection. The second needs only that old anchors are history-measurable. Since Z is history-measurable, its cross term is with the conditional mean of Delta. Young's inequality gives

    -2 E<Z,Delta> <= (p/4)X +(4/p)M2,
    -2 E<U,Delta> <= p E+p D2,
     2 E<V,Delta> <= (p/4)X+4p D2.

These inequalities hold also at p=1 and require no division by 1-p. Thus

    Xi_r <= (1-p/2)X+2pE+(1+5p)D2+(4/p)M2.             (T)

In particular, because 1+5p<=6, the server moment supplier implies

    Xi_r <= (1-p/2+72h²)X
            +[2p+(36+8/p)h²]E
            +(18+8/p)t²G+108t²q.                    (L)

This is an exact proposed replacement for the current lag statement. It retains t-dependent small factors rather than coarsening them away. No local drift or objective lower bound is needed for (T) or (L). Gradient-consistent initialization is required because the server supplier uses it.

## Potential absorption

Assume 0<t<=p^(2/3)/(100 beta), and define

    P_r=E[f(x_r)-f*]+(24 beta³ t²/p) Xi_r.

Let lambda=24 beta³t²/p. Smooth descent and the first-moment identity, using only Jensen on the adaptive mean-gradient bias, give exactly the existing first proof step:

    Ef(x_r)-Ef(x_{r-1})
      <= -t(1/2-3h/2)G
         +beta²t(1/2+3h)E+6 beta³t² X+9 beta t²q.

Add lambda times (L)-X. The coefficient of E is beta²t d where

    d=1/2+51h+864h³/p+192h³/p².

The other new coefficients are

    X: beta³t²[-6+1728h²/p],
    G: -t[1/2-3h/2]+24 beta³t⁴(18/p+8/p²),
    noise: 9 beta t²q+2592 beta³t⁴q/p.

For p in (0,1] and h<=p^(2/3)/100,

    h<=1/100, h²/p<=1/10000,
    h³/p<=1/1000000, h³/p²<=1/1000000,
    d<=1.011056<11/10.

Substitute E<=72t²(G+beta²X)/eta_g²+96t²sigma²/(K eta_g²). The total X coefficient, divided by beta³t², is at most

    -6+1728/10000+(396/5)/100 = -5.0352 <0.

The total G coefficient, divided by t, is at most

    -1/2+3/200+624/1000000+(396/5)/10000
       = -0.476456 <= -1/3.

The oracle contribution, divided by beta t² q, is at most

    9+2592/10000+(528/5)(1/100) S/eta_g²
      =9.2592+1.056 S/eta_g²
      <=10(1+S/eta_g²).

Dropping the nonpositive X term proves the complete local potential result

    P_r <= P_{r-1} -(t/3)G
           +[10 beta t² sigma²/(KS)](1+S/eta_g²).    (P)

No hidden assumption of nonadaptive gradients or independence between old anchors and the server step appears here. Each of the decimal inequalities is terminating rational arithmetic (e.g.396/5=79.2 and528/5=105.6).

## Rate and output

Choose eta_g=sqrt(S), uniform independent J in {0,...,R-1}, output x_J. The anchors initialize at x_0, so Xi_0=0 and P_0=F=f(x_0)-f*. Sum (P), use P_R>=0, and divide by Rt/3:

    E||grad f(x_J)||² <= 3F/(tR)+60 beta t sigma²/(KS).

This is stronger than the original theorem's displayed 14F/(tR)+140 beta t sigma²/(KS), for the smaller admissible absolute step 1/100. To reach epsilon>0 with F>0 choose

    t=min{p^(2/3)/(100 beta), epsilon KS/(120 beta sigma²)}

(omit the second bound when sigma=0) and

    R>=ceil(6F/(t epsilon)).

Then each term is <=epsilon/2, and

    R=O(1+p^(-2/3) beta F/epsilon
          + beta sigma² F/(KS epsilon²)).

The additive 1 is the integrality cost of at least one round. As usual it may be implicit in a communication complexity bound. If F=0, x_0 is already globally minimizing and grad f(x_0)=0, so return x_0 without communication. Define F independently of existence of a minimizer; the nonconvex hypothesis only needs a finite lower bound f*. This is a wording repair required in the combined theorem.

## Actual logical dependencies and consumer edits

Control identity -> server moments; control identity -> drift; server moments + exact anchor expansion -> tracking; tracking + drift + server moments + smooth descent -> potential; potential + uniform output identity + telescoping -> nonconvex theorem. The replacement lag lemma may keep its current dependencies but must add the gradient-consistent initialization inherited from its server supplier and remove its incorrect conditional-mean Fact F3. No new mathematical helper is necessary: the anchor expansion and Young bounds fit its local proof.

The round-progress lemma needs explicit eta_g>=1 and gradient-consistent initialization, currently absent from its Statement but inherited from suppliers. Replace its unresolved section by the local proof above. Nonconvex theorem gets step constant100, the displayed stronger 3/60 bound or may preserve its valid weaker14/140 bound, and the completed output/rate proof. Every unchanged convex obligation remains the parent's separate responsibility. These proposals authorize no gate, publication, commit, metadata rewrite or consumer certification.
