# Hernán–Robins, What If, author revision19August2026

Actual complete focused passages consulted: printed323–328, including entire Technical Point23.1 proof and Technical Point23.2 proof. The local kernel theorem keeps its own explicit independent-error and support proof.

## PDF page 332

Chapter 23
CAUSAL MEDIATION
In Part III, we have presented approaches to estimate the causal effect of a time-varying treatment on an outcome.
Our goal was to quantify changes in the outcome distribution under different treatment strategies that are sustained
over time. Our goal was not to determine how treatment exerted its effect on the outcome. We now turn our
attention to causal mediation: the study of the causal pathways through which the treatment affects the outcome.
The study of causal mediation can be seen as a special case of causal inference with time-varying treatments.
Rather than having a single treatment that takes different values over time, in mediation analysis we have two
different variables—the treatment of interest and the mediator—at different times.
This chapter describes a
theoretical framework for causal mediation that, like the rest of the book, is based on hypothetical interventions
that can be mapped into a target trial. Unlike other approaches to mediation that are based on pure direct effects
and total indirect effects, an interventionist framework for mediation opens the door to empirical verification of
the causal estimates, a desirable condition for any scientific endeavor.
23.1 Mediation analysis under attack
Consider a randomized trial in which a random sample of cigarette smokers
are assigned to either smoking cessation (A = 0) or to continuation of smoking
(A = 1). Suppose that there was perfect adherence: all individuals assigned
to A = 0 quit smoking and all individuals assigned to (A = 1) continued to
smoke. The investigators found a beneficial effect of smoking cessation on the
risk of myocardial infarction Y at 1 year, i.e., E [Y |A = 1] > E [Y |A = 0]
After the beneficial effect of smoking cessation A on the risk of heart dis-
ease Y has been established, the investigators wonder whether the benefit is a
consequence of the effect of A on reducing hypertension M. Besides data on
treatment A at baseline and outcome Y at one year, they also have data on the
presence of hypertension M measured at 6 months. (For simplicity, suppose
Figure 23.1
that no individual experienced the outcome Y in the first 6 months.) The
causal diagram in Figure 23.1 depicts these variables under the assumption
that interventions on M are sufficiently well defined.
Investigators are interested in decomposing the total effect of A on Y into
the indirect causal pathways mediated by M and the direct pathways not
mediated by M.
We then say that investigators are interested in a causal
mediation analysis.
In the previous chapter we introduced several approaches to formalize the
concept of direct effects (Technical Points 22.1 and 22.2) but not the concept
of indirect effect. To formalize the decomposition of a total treatment into
Robins and Greenland (1992) intro-
duced the pure direct effect and the
total indirect effect.
direct and indirect effects, we can define the pure direct effect and the total
indirect effect of A on Y .
The pure direct effect of A on Y not through M is the average causal effect
of A on Y if, for each individual, the value of M had been set to the value
that M would have taken if A had been set to 0, i.e., if M had been set to the
value M a=0 (which is 1 for some individuals and 0 for others). The pure direct


## PDF page 333

324
Causal mediation
Technical Point 23.1
Proof of the mediation formula. In the setting depicted by the causal diagram in Figure 23.1 with treatment A,
mediator M, and outcome Y , the counterfactual mean E
h
Y a=1,M a=0i
is equal to
= P
m E

Y a=1,m|M a=0 = m

Pr[M a=0 = m] by the laws of probability
= P
m E

Y a=1,m
Pr[M a=0 = m] by the cross-world conditional independence Y a=1,m⊥⊥M a=0
= P
m E [Y |A = 1, M = m] Pr[M = m|A = 0] by exchangeability and consistency.
The cross-world conditional independence used above is assumed when the causal diagram represents an NPSEM-IE,
but not when it represents an FFRCISTG model.
effect is then the contrast
E
h
Y a=1,M a=0i
−E
h
Y a=0,M a=0i
In our example, the pure direct effect is the effect of smoking cessation A if
we could assign to each person the value of hypertension M (1 or 0) that the
person would have had if she had quit smoking. This value of hypertension M
is known for individuals who actually quit smoking, but it remains unknown
for individuals who continued to smoke. We therefore say that E
h
Y a=1,M a=0i
,
and therefore the pure direct effect, is a cross-world quantity because it involves
a counterfactual outcome indexed by two treatment values, a = 1 and a = 0,
that cannot occur simultaneously for the same individual in the same world.
Pearl (2001) referred to the pure di-
rect effect and the total indirect ef-
fect as the natural direct effect and
the natural indirect effect, respec-
tively.
The total indirect effect, also a cross-world quantity, is defined as
E
h
Y a=1,M a=1i
−E
h
Y a=1,M a=0i
The sum of the pure direct effect and the total indirect effect E
h
Y a=1,M a=1i
−
E
h
Y a=0,M a=0i
is, by consistency, the total effect E

Y a=1
−E

Y a=0
.
In Figure 23.1, there do not exist unmeasured common causes of the medi-
ator M and the outcome Y . If common causes were present, no direct effects
could be identified, including controlled direct effects and the mediation effects,
i.e., the pure direct and the total indirect effects. To identify the mediation
effects, we need to identify the cross world quantity E
h
Y a=1,M a=0i
under the
causal diagram in Figure 23.1. The so-called mediation formula does that:
X
m
E [Y | A = 1, M = m] Pr[M = m | A = 0]
The proof is shown in Technical Point 23.1.
The mediation formula seems surprising because it identifies a cross-world
counterfactual quantity whose value cannot be empirically confirmed by any
experimental intervention on A and M, not even in principle.
To achieve
In some very unusual situations,
we could identify the value of this
cross-world counterfactual quantity
by a crossover trial (see Fine Points
2.1 and 3.2).
this, however, one needs to assume that the causal diagram in Figure 23.1
represents an NPSEM-IE rather than an FFRCISTG, the latter of which is
the counterfactual model that we have been using throughout the book (see
Technical Point 6.2).
The proof of the mediation formula requires the unverifiable assumption
that some counterfactual variables defined in separate worlds are independent.
Specifically, the proof requires that the value of the outcome Y a=1,m in a world


## PDF page 334

23.2 A defense of mediation analysis
325
in which we have jointly intervened by setting the value of treatment to 1 and
the value of the mediator to m is independent from the value of the mediator
M a=0 in a world in which we have intervened to set the value of treatment
to 0. Therefore, the variables Y a=1,m and M a=0 cannot be simultaneously
observed for the same individual in a single world, and thus their independence
is not empirically verifiable in any experiment in which A and M are randomly
assigned singly or jointly (see Technical Point 7.1).
These cross-world independencies are assumed under an NPSEM-IE but
not under an FFRCISTG model. This is one reason for our privileging an
Under an FFRCISTG model, the
pure direct effect and the total indi-
rect effect are not point identified,
but sharp bounds can be obtained
(Robins and Richardson 2010).
FFRCISTG model over an NPSEM-IE: because cross-world independencies
cannot be verified by any randomized experiment, we want to use causal infer-
ence methods whose results are, in principle, verifiable.
Based on this discussion, some policy makers are unimpressed that the
investigators can identify the pure direct effect. As a cross-world parameter,
they find the pure direct effect to be without policy or public health importance
because it does not correspond to any intervention. To convince these skeptics,
advocates of the NPSEM-IE will need to work harder.
23.2 A defense of mediation analysis
The investigators of the smoking cessation trial, as advocates of the NPSEM-
IE, prepare the following rationale to convince the skeptics about the practical
utility of the pure direct effect.
“Suppose that, starting a year from now, nicotine-free cigarettes
will be available and that your policy goal is learning the benefits
of nicotine-free cigarettes as soon as possible. To do so, we use
the already collected data from the above smoking cessation trial
to estimate the two-year risk of heart disease Y under an inter-
vention requiring all smokers to change to nicotine-free cigarettes
(when they become available). Suppose that strong experimental
Pearl (2001) provided a similar ar-
gument to justify the use of pure
direct effects.
evidence exists that (i) the entire causal effect of nicotine on the
outcome Y (heart disease) is through its effect on the mediator
M (hypertension), and that (ii) the non-nicotine components in
cigarettes have no direct causal effect on the mediator M (hyper-
tension). Under assumptions (i) and (ii), the hypertensive status
M of a smoker of nicotine-free cigarettes will equal her hypertensive
status under non-exposure to cigarettes and hence E
h
Y a=1,M a=0i
will be the risk of heart disease in smokers were all smokers to
change to nicotine-free cigarettes a year from now. That is exactly
your public health effect of interest and this is what the mediation
formula would compute when applied to the data of our study”.
This is interesting. To argue for the substantive importance of the parame-
ter E
h
Y a=1,M a=0i
, the NPSEM-IE advocates tell a story about the effect of an
intervention on the nicotine content of cigarettes—an intervention that makes
no reference to the mediator M at all. Also, they make the “no direct effect”
assumptions (i) and (ii) about the absence of direct effects of variables that
were not even included on the causal diagram in Figure 23.1.
The investigators’ story states that the variable A can be decomposed into
two separable components N and O. The separable component N directly


## PDF page 335

326
Causal mediation
Technical Point 23.2
When the mediation formula is the g-formula. According to the causal diagram in Figure 23.3, exchangeability
holds for the separable components N and O and therefore the mean E

Y n=0,o=1
may be identified by the g-formula.
However, in the smoking cessation trial described in the main text, no individual has data (N = 0, O = 1). Therefore,
positivity does not hold and it appears that the g-formula cannot identify E

Y n=0,o=1
. But, given exchangeability and
consistency, positivity is a sufficient but not necessary condition for identification by the g-formula; identification only
requires that the g-formula is a function of the observed data distribution. We now show that the deterministic bold
arrows in Figure 23.2 and the no direct effect assumptions (i) and (ii) together imply that the g-formula is indeed a
function of the observed data distribution of (A, M, Y )—that function being the mediation formula.
Under an FFRCISTG represented by Figure 23.2, if data on N and O were available, the mean E

Y n=0,o=1
would
be identified by the g-formula
X
m
E [Y | O = 1, M = m] Pr(M = m | N = 0)
since, in the g-formula N = 0 needs not be included in the first conditioning event and O = 1 needs not be included in
the second conditioning event because N is not a parent of Y and O is not a parent of M in Figure 23.2. Furthermore,
even though positivity does not hold, the g-formula is a function of the observed data distribution only because O = 1
if and only if A = 1 and N = 0 if and only if A = 0. Thus, we can rewrite the g-formula for E

Y n=0,o=1
as
X
m
E [Y | A = 1, M = m] Pr(M = m | A = 0)
which is exactly the mediation formula. This derivation, based on the g-formula, is somewhat heuristic because of the
presence of null sets arising from determinism between N, O and L. Robins et al. (2022) provide an alternative, rigorous
proof using the SWIG Markov property described in Technical Point 21.12.
Not only does the g-formula equal the mediation formula under the expanded causal diagram in Figure 23.2, but the
g-formula also equals the front door formula under the expanded causal diagram in Figure 23.7, as shown in Technical
Point 23.3.
affects M but not Y . The separable component O directly affects Y but not
M. Also, according to the story, each separable component can in principle be
intervened on separately. For example, Y n=0,o=1 represents the counterfactual
Figure 23.2
outcome under an intervention that removes (only) the nicotine component of
cigarettes.
The most direct representation of this causal story is provided by an FFR-
CISTG model represented by the causal DAG in Figure 23.2 where N is a
binary variable representing nicotine exposure, and O is a binary variable rep-
resenting exposure to the other non-nicotine components of a cigarette. The
bold arrows from A to N and O indicate deterministic relationships. This is
because, in the actual data from the trial, either one continues to smoke normal
cigarettes so A = N = O = 1, or quits smoking cigarettes so A = N = O = 0.
The absence of an arrow from N to Y encodes assumption (i) that N does
These are “no controlled direct ef-
fect” assumptions. Assumption (i)
says that there is no direct effect of
N on Y when controlling for (set-
ting) the value of M.
not have a direct effect on Y .
The absence of an arrow from O to M en-
codes assumption (ii) that O does not have an effect on M. Figure 23.3 shows
the associated SWIG. If O is not a cause of M for every individual we can
additionally write the random variable M n,o as M n.
Under this characterization of the problem, the g-formula that identifies
E

Y n=0,o=1
is exactly the mediation formula (see proof in Technical Point
23.2). Let us review the lessons we learned.
For a researcher that initially accepted an NPSEM-IE associated with the


## PDF page 336

23.3 Empirically verifiable mediation
327
DAG in Figure 22.1, the mean E
h
Y a=1,M a=0i
was already identified by the
mediation formula so the story of separable effects of N and O did not con-
tribute to identification. Rather, it served only to show that the parameter
E
h
Y a=1,M a=0i
—and thus the pure direct effect and the total indirect effect—
Figure 23.3
encodes a parameter E

Y n=0,o=1
of public health interest. For a researcher
that takes the FFRCISTG point of view, the story not only provides an inter-
ventional interpretation of the mean E
h
Y a=1,M a=0i
as the mean E

Y n=0,o=1
,
but in addition makes both means identifiable via the g-formula or, equiva-
lently, the mediation formula. In fact, when we interpret absence of an ar-
row as an absence of a direct causal effect for all individuals, Y a=1,M a=0 and
Y n=0,o=1 are equal for every individual.
This characterization of the problem also allows us to define and identify the
separable direct effect of the component N on the outcome Y , E

Y n=1,o=1
−
E

Y n=0,o=1
, which is a controlled direct effect for the separable compo-
nent N.
This effect is also equal to the total indirect effect E

Y a=1
−
E
h
Y a=1,M a=0i
. Analogously, E

Y n=1,o=1
−E

Y n=1,o=0
is the pure direct
effect E
h
Y a=1,M a=0i
−E

Y a=0
.
23.3 Empirically verifiable mediation
The interventional interpretation of E
h
Y a=1,M a=0i
is only valid if the story
about the separable effects of N and O is correct and Figure 23.3 represents
an FFRCISTG. An advantage of the interventional interpretation is that the
validity of this story can be, in principle, empirically refuted via a randomized
trial, as we now describe.
When nicotine-free cigarettes become available in a year, we conduct a new
randomized trial in which a random sample of cigarette smokers are randomly
assigned to one of three groups: smoking cessation (A = N = O = 0), contin-
uation of smoking of standard cigarettes (A = N = O = 1), or continuation of
smoking of nicotine-free cigarettes (N = 0, O = 1). That is, the new trial has
the same two arms as the original trial plus an additional arm of nicotine-free
cigarettes. In the absence of temporal trends, the mean outcomes for the first
two arms should be the same in both trials. We assume that the sample size
of both trials is large enough to ignore sampling variability.
By randomization, the mean outcome E [Y |N = 0, O = 1] in the new trial
is expected to equal E

Y n=0,o=1
. Therefore, if our story is correct, we expect
that E [Y |N = 0, O = 1] will equal the mediation formula from the earlier trial.
Otherwise, the N and O story has been empirically refuted, which implies that
one or more of the following assumptions is incorrect: (i) no direct effect of
nicotine on the outcome, (ii) no direct effect of other, non-nicotine components
on the mediator, (iii) no unmeasured common cause U of M and Y on the
causal diagram in Figure 23.2.
If E [Y |N = 0, O = 1] differs from the mediation formula, we can use the
data from this new trial to investigate which of the assumptions (i)-(iii) are
false. To do so, we start by checking whether O and M are associated among
those with N = 0, i.e.,
E [M|N = 0, O = 1] −E [M|N = 0, O = 0] ̸= 0


## PDF page 337

328
Causal mediation
Fine Point 23.1
Empirical falsification of the assumptions for separable effects. Suppose we had conducted the three-arm trial
with interventions on N and O, and found that N and Y are associated within joint levels of M and O. Then, as
stated in the main text, we conclude that either assumption (i) or assumption (iii), or both, are false.
To determine which of the two assumptions are false, we would need another randomized trial with, say, 8 arms
in which we intervene on M as well as on N and O. If N has no direct effect on Y except through M, N will be
independent of Y given M and O in the eight-arm trial. If M and Y do not share an unmeasured common cause, the
conditional distribution of Y given M within levels of N and O should be the same in the three-arm trial and in the
eight-arm trial.
One might wonder how Figure 23.2 can have an unmeasured common cause of M and Y left off the graph if we
are correct in assuming that Figure 23.1 represents an FFRCISTG model with no common causes of M and Y . The
explanation is that common causes may only be present (i.e., active) under interventions that assign different values of N
and O to each person. The FFRCISTG model associated with Figure 23.1, unlike that associated with Figure 23.2, only
considers interventions A = N = O = 1 and A = N = O = 0 that assign the same value to each person. Interestingly,
if a common cause U of Y and M is the only reason E [Y |N = 0, O = 1] in the new trial differs from the mediation
formula, it is still the case that Y n=0,o=1 = Y a=1,M a=0 for every individual. However, E

Y n=0,o=1
= E
h
Y a=1,M a=0i
is not identified by the mediation formula. Robins et al. (2022) describe a hypothetical but realistic study of treatment
for river blindness under which Figure 23.1 is an FFRCISTG but Figure 23.2 is not because a common cause U of Y
and M is missing from the latter graph.
If that is the case, then assumption (ii) is refuted and the arrow O →M should
be added to Figure 23.2 (and the corresponding arrow to Figure 22.3).
We next check whether N and Y are associated within joint levels of M
and O, i.e., whether
E [Y |N = 1, O = 1, M = m] −E [Y |N = 0, O = 1, M = m] ̸= 0
for some values of m. If that is the case, then assumption (i) is refuted (which
implies that an arrow N →Y should be added to the causal diagrams) or an
unmeasured common cause U of M and Y exists (and should be added to the
causal diagrams). See Fine Point 23.1.
Now suppose that in two years, when the results of the new trial become
available, the mean outcome estimates are equal in the arms that correspond to
the same intervention in both trials, but the estimate of the mean outcome in
the third arm of the new trial, E [Y |N = 0, O = 1], differs from the mediation
formula in the first trial. How would different people react?
Both a person who had assumed that Figure 23.1 was an NPSEM-IE and
a person who only assumed that it was an FFRCISTG would agree that the
story of separable effects of O and N was incorrect, and that E

Y n=0,o=1
is
correctly estimated by the mean outcome in the third arm of the new trial and
not by the mediation formula in the earlier trial.
Those who had assumed an NPSEM-IE can continue to believe that the
mean E
h
Y a=1,M a=0i
is still equal to the mediation formula, but they cannot
justify the policy interest of the pure direct effect as the effect of taking nicotine-
free cigarettes. Those who assumed an FFRCISTG may have little interest in
the original mediation formula. Instead they will be interested in what they
have learned about the effects of nicotine-free cigarettes on the outcome from
the three-arm randomized trial. They will also be interested in learning that
one or more of the following assumptions were false: (i) no direct effect of
